import { FormEvent, useEffect, useState } from 'react'

const allLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
const allNumbers = '1234567890'
const allSymbols = '!@#$%^&*()_+'

const Coupon = () => {
  const [size, setSize] = useState<number>(8)
  const [prefix, setPrefix] = useState<string>('')
  const [includeNumbers, setIncludesNumbers] = useState<boolean>(false)
  const [includeCharacters, setIncludesCharacters] = useState<boolean>(false)
  const [includeSymbols, setIncludesSymbols] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const [coupon, setCoupon] = useState<string>('')

  const submitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(!includeNumbers && !includeCharacters && !includeSymbols) {
      return alert('Please Select One At Least')
    }

    let result: string = prefix || ''

    const loopLength: number = size - result.length

    for (let i = 0; i < loopLength; i++) {
      let entireString: string = '';
      if(includeNumbers) entireString += allNumbers
      if(includeCharacters) entireString += allLetters
      if(includeSymbols) entireString += allSymbols

      const randomPosition: number = Math.floor(Math.random() * entireString.length)
      result += entireString[randomPosition]
    }
    setCoupon(result)
  }

  const copyText = async (generatedCoupon: string) => {
    await window.navigator.clipboard.writeText(generatedCoupon)
    setIsCopied(true)
  }

  useEffect(() => {
    setIsCopied(false)
  }, [coupon])

  return (
    <main className='dashboard-app-container'>
      <h1>Coupon</h1>
      <section>
        <form className='coupon-form' onSubmit={submitHandle}>
          <input
            type='text'
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            maxLength={size}
            placeholder='Text to include'
          />
          <input
            type='number'
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
            min={8}
            max={25}
            placeholder='Coupon Length'
          />
          <fieldset>
            <legend>Include</legend>
            <input
              type='checkbox'
              checked={includeNumbers}
              onChange={() => setIncludesNumbers((prev) => !prev)}
            />
            <span>Numbers</span>
            <input
              type='checkbox'
              checked={includeCharacters}
              onChange={() => setIncludesCharacters((prev) => !prev)}
            />
            <span>Characters</span>
            <input
              type='checkbox'
              checked={includeSymbols}
              onChange={() => setIncludesSymbols((prev) => !prev)}
            />
            <span>Symbols</span>
          </fieldset>
          <button type='submit'>Generate</button>
        </form>
        {coupon && (
          <code>
            {coupon}{' '}
            <span onClick={() => copyText(coupon)}>
              {isCopied ? 'Copied' : 'Copy'}
            </span>
          </code>
        )}
      </section>
    </main>
  )
}

export default Coupon
