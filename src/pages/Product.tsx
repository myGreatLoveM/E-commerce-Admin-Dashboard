import { ReactElement, useCallback, useState } from 'react'
import TableHOC from '../components/TableHOC'
import { Column } from 'react-table'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

type ProductDataType = {
  photo: ReactElement
  name: string
  price: number
  stock: number
  action: ReactElement
}

const columns: Column<ProductDataType>[] = [
  {
    Header: 'Photo',
    accessor: 'photo',
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Price',
    accessor: 'price',
  },
  {
    Header: 'Stock',
    accessor: 'stock',
  },
  {
    Header: 'Action',
    accessor: 'action',
  },
]

const img =
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804'

const img2 = 'https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg'

const arr: ProductDataType[] = [
  {
    photo: <img src={img} alt='Shoes' />,
    name: 'Puma Shoes Air Jordan Cook Nigga 2023',
    price: 690,
    stock: 3,
    action: <Link to='/admin/product/sajknaskd'>Manage</Link>,
  },

  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Shoes' />,
    name: 'Puma Shoes Air Jordan Cook Nigga 2023',
    price: 690,
    stock: 3,
    action: <Link to='/admin/product/sajknaskd'>Manage</Link>,
  },

  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img} alt='Shoes' />,
    name: 'Puma Shoes Air Jordan Cook Nigga 2023',
    price: 690,
    stock: 3,
    action: <Link to='/admin/product/sajknaskd'>Manage</Link>,
  },

  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
  {
    photo: <img src={img2} alt='Shoes' />,
    name: 'Macbook',
    price: 232223,
    stock: 213,
    action: <Link to='/admin/product/sdaskdnkasjdn'>Manage</Link>,
  },
]

const Product = () => {
  const [data] = useState<ProductDataType[]>(arr)

  const Table = useCallback(
    TableHOC<ProductDataType>(
      columns,
      data,
      'dashboard-product-container',
      'Products',
      true,
    ),
    []
  )

  return (
    <main>
      {Table()}
      <Link to='/admin/product/new' className='create-product-btn'>
        <FaPlus />
      </Link>
    </main>
  )
}

export default Product
