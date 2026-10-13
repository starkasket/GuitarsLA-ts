type Guitar = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
/* interface Guitar  {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
}
 */
type CartItem = Guitar&{
    quantity: number
}

type GuitarProps = {
    guitar: Guitar,
    addToCart: (item: Guitar) => void
}

type CartProps = {
    cart: CartItem[],
    decreaseQuantity: (item: number) => void,
    increaseQuantity: (item: number) => void,
    removeFromCart: (item: number) => void, 
    clearCart: () => void, 
    isEmpty: boolean, 
    cartTotal: number
}

/* interface CartItem extends Guitar&{
    quantity: number
} */
