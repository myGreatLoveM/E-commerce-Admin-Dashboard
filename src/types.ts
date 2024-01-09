export type OrderItemType = {
    name: string;
    photo: string;
    price: number;
    quantity: number;
    _id: string;
}

export type OrderInfoType = {
    name: string;
    address: string;
    city: string;
    state: string;
    country: string;
    pincode: string;
    status: "Processing" | "Shipped" | "Delieved";
    subtotal: number;
    discount: number;
    shippingCharges: number;
    tax: number;
    total: number;
    orderItems: OrderItemType[];
    _id: string;
}

