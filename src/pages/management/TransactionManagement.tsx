import { useState } from 'react'
import { OrderInfoType, OrderItemType } from '../../types'
import { Link } from 'react-router-dom'

const img =
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804'

const orderItems: OrderItemType[] = [
  {
    name: 'Puma Shoes',
    photo: img,
    _id: 'abkndkwk',
    quantity: 4,
    price: 2000,
  },
]

const TransactionManagement = () => {
  const [order, setOrder] = useState<OrderInfoType>({
    name: 'Prem',
    address: 'Suryanagar Panchvati society, laxmi nagar main road',
    city: 'Rajkot',
    state: 'Gujarat',
    country: 'India',
    pincode: '360001',
    status: 'Shipped',
    subtotal: 8000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 8000 + 200 + 0 - 1200,
    orderItems,
    _id: 'odobondobondbnnfb',
  })

  const {
    name,
    address,
    city,
    country,
    state,
    pincode,
    subtotal,
    shippingCharges,
    tax,
    discount,
    total,
    status,
  } = order

  const updateHandle = () => {
    setOrder((prev) => {
      return {...prev, status: prev.status === 'Processing' ? 'Shipped' : 'Delieved' }
    })
  }


  return (
    <main className='product-management'>
      <section style={{padding: '2rem'}}>
        <h2>Order Items</h2>
        {order.orderItems.map((item) => (
          <OrderItemCard
            name={item.name}
            photo={item.photo}
            price={item.price}
            quantity={item.quantity}
            _id={item._id}
          />
        ))}
      </section>
      <article className='shipping-info-card'>
        <h1>Order Info</h1>
        <h5>User Info</h5>
        <p>Name : {name}</p>
        <p>
          Address: {`${address}, ${city}, ${state}, ${country}, ${pincode}`}
        </p>
        <h5>Amount Info</h5>
        <p>Subtotal: {subtotal}</p>
        <p>Shipping Charges: {shippingCharges}</p>
        <p>Tax: {tax}</p>
        <p>Discount: {discount}</p>
        <p>Total: {total}</p>
        <h5>Status Info</h5>
        <p>
          Status: 
          <span
            className={
              status === 'Delieved'
                ? 'purple'
                : status === 'Shipped'
                ? 'green'
                : 'red'
            }
          >
            {' '}{status}
          </span>
        </p>
        <button onClick={updateHandle}>Process Status</button>
      </article>
    </main>
  )
}

const OrderItemCard = ({
  name,
  photo,
  price,
  quantity,
  _id,
}: OrderItemType) => (
  <div className='transaction-product-card'>
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>
      ${price} X {quantity} = ${price * quantity}
    </span>
  </div>
)

export default TransactionManagement
