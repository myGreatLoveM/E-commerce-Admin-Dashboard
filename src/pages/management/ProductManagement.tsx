import { ChangeEvent, FormEvent, useState } from 'react'

const img =
  'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804'

const ProductManagement = () => {
  const [name, setName] = useState<string>('Puma Shoes')
  const [price, setPrice] = useState<number>(2000)
  const [stock, setStock] = useState<number>(10)
  const [photo, setPhoto] = useState<string>(img)

  const [nameUpdate, setNameUpdate] = useState<string>(name)
  const [priceUpdate, setPriceUpdate] = useState<number>(price)
  const [stockUpdate, setStockUpdate] = useState<number>(stock)
  const [photoUpdate, setPhotoUpdate] = useState<string>(photo)

  const imageHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0]

    const reader: FileReader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPhotoUpdate(reader.result)
        }
      }
    }
  }

  const submitHandle = (e: FormEvent) => {
    e.preventDefault()
    setName(nameUpdate)
    setPrice(priceUpdate)
    setStock(stockUpdate)
    setPhoto(photoUpdate)
  }

  return (
    <main className='product-management'>
      <section>
        <strong>ID - amksnvsvlsdnbklsdb</strong>
        <img src={photo} alt='product' />
        <p>{name}</p>
        {stock > 0 ? (
          <span className='green'>{stock} Availabel</span>
        ) : (
          <span className='red'>Not Available</span>
        )}
        <h4>${price}</h4>
      </section>
      <article>
        <form onSubmit={submitHandle}>
          <h2>Manage</h2>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={nameUpdate}
              onChange={(e) => setNameUpdate(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='price'>Price</label>
            <input
              required
              type='number'
              name='price'
              id='price'
              placeholder='Price'
              value={priceUpdate}
              onChange={(e) => setPriceUpdate(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor='stock'>Stock</label>
            <input
              required
              type='number'
              name='stock'
              id='stock'
              placeholder='Stock'
              value={stockUpdate}
              onChange={(e) => setStockUpdate(parseInt(e.target.value))}
            />
          </div>
          <div>
            <label htmlFor='photo'>Photo</label>
            <input type='file' name='photo' id='photo' onChange={imageHandle} />
          </div>

          {photoUpdate && <img src={photoUpdate} alt='new' />}

          <button type='submit'>Update</button>
        </form>
      </article>
    </main>
  )
}


export default ProductManagement
