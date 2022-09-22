import { useState } from 'react'
import reactLogo from './assets/react.svg'
import {AdressInfo} from './components/AdressInfo'

function App() {
  const [zipCode, setZipCode] = useState("")
  const [dataAddress, setDataAddress] =useState({})

  function handleChangeZipCode(event) {
    setZipCode(event.target.value)
  }

  function handleClickSearchButton() {
    if (zipCode.length<0) {
      return;
    } else {
      fetch(`https://viacep.com.br/ws/${zipCode}/json`, { mode: 'cors' })
      .then((res) => res.json())
      .then((data) => {
        if(data.hasOwnProperty("erro")) {
          alert('CEP não existente')
        } else {
          setDataAddress(data)
        }
      })
      .catch( err => console.log(err))
    }
  }

  return (
    <div>
      <input 
      value={zipCode}
      onChange={handleChangeZipCode}
      placeholder='Digite seu CEP'/>
      <button onClick={handleClickSearchButton}>
        Pesquisar</button>
        
      <AdressInfo
      address={dataAddress.logradouro}
      district={dataAddress.bairro}
      city={dataAddress.localidade}
      state={dataAddress.uf} />
    </div>
  )
}

export default App
