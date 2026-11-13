import { useEffect, useState, useMemo } from 'react';
// import { db } from '../data/db';




export const useCart = () => {

    const API_URL = import.meta.env.VITE_API_URL;

    //const [data, setData] = useState(db);
    const [data, setData] = useState<Guitar[]>([]);
    const [cart, setCart] = useState(initialCart);


    const [total, setTotal] = useState(0);

    const isEmpty = useMemo(() => cart.length === 0, [cart])

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0), [cart])


    useEffect(() => {
        const getGuitars = async () => {
            try {
                const response = await fetch(`${API_URL}/guitars`);

                if (!response.ok) {
                    throw new Error("Error al obtener las guitarras");
                }

                const result = await response.json();

                console.log(result);
                
                setData(result.data);
            } catch (error) {
                console.log(error);
            }
        };

        getGuitars();
    }, []);


    async function addGuitar(guitar: NewGuitar) {

        const response = await fetch(`${API_URL}/guitars`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(guitar)
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error("Error al registrar la guitarra");
        }

        setData((prevData) => [...prevData, result.data]);
    }

    function initialCart() {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : []
    }

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    const MIN_ITEMS = 1;
    const MAX_ITEMS = 5;


    function addToCart(item) {
        const itemExists = cart.findIndex((guitar) => guitar.id == item.id); //regresa el elemento con el mismo id y regresa el idice
        if (itemExists >= 0) {
            if (cart[itemExists].quantity >= MAX_ITEMS) return;
            const updatedCart = [...cart];
            updatedCart[itemExists].quantity++;
            setCart(updatedCart);
        } else {
            item.quantity = 1;
            setCart([...cart, item]); //se copia el carrito
        }
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity > MIN_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            }
            return item
        })
        setCart(updatedCart);
    }

    function increaseQuantity(id) {
        const updatedCart = cart.map((item) => {
            if (item.id === id && item.quantity < MAX_ITEMS) {

                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })

        setCart(updatedCart);
    }

    function removeFromCart(id) {
        setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id))
    }


    function clearCart() {
        setCart([]);
    }


    return {
        cart,
        data,
        addToCart,
        addGuitar,
        decreaseQuantity,
        increaseQuantity,
        removeFromCart,
        clearCart,
        total,
        cartTotal,
        isEmpty

    };
}