import { ChangeEvent, useState } from 'react'

const NewProduct = () => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>()
  const [stock, setStock] = useState<number>()
  const [photo, setPhoto] = useState<string>()

  const imageHandle = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0]

    const reader: FileReader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if(typeof reader.result === 'string') {
          setPhoto(reader.result)
        }
      }
    }
  }

  return (
    <main className='product-management'>
      <article>
        <form>
          <h2>New Product</h2>
          <div>
            <label htmlFor='name'>Name</label>
            <input
              required
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
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
              value={stock}
              onChange={(e) => setStock(parseInt(e.target.value))}
            />
            </div>
            <div>
            <label htmlFor='photo'>Photo</label>
            <input type='file' name='photo' id='photo' onChange={imageHandle} />
            </div>

            {photo && <img src={photo} alt='new' />}

            <button type='submit'>Create</button>
        </form>
      </article>
    </main>
  )
}

export default NewProduct
