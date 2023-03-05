import { useState } from 'react'

const InputGroup = ({ setData }) => {
  const apiKey = '5109cdce4a6ff278e32059914de0c939'

  const [city, setCity] = useState('')

  const handleClick = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        if (data.cod != '200') {
          throw new Error('ないってよ')
        }
        console.log(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setCity(e.currentTarget.value)
        }}
        onKeyDown={(e) => {
          e.key === 'Enter' && handleClick()
        }}
      />
      <button onClick={handleClick}>go</button>
    </div>
  )
}

export default InputGroup
