import { useEffect, useState } from 'react'
import InputGroup from './components/section/inputGroup'
import WeatherCard from './components/section/weatherCard'

function App() {
  const [data, setData] = useState()

  return (
    <>
      <div>
        <InputGroup setData={setData} />
        <WeatherCard data={data} />
      </div>
    </>
  )
}

export default App
