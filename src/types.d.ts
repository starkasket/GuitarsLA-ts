type Guitar = NewGuitar & {
    id: number;
};
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
type NewGuitar = {
    name: string;
    price: number;
    description: string;
    image: string;
};


type GuitarFormData = {
    name: string;
    price: number;
    description: string;
    image: string;
};

type GuitarFormProps = {
    addGuitar: (guitar: GuitarFormData) => Promise<void>;
};
/* interface CartItem extends Guitar&{
    quantity: number
} */
