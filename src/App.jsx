import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Anuncio from './Anuncio'
import Banner from './Banner'
import Cabecalho from './Cabecalho'
import DispositivosEmpilhados from './DispositivosEmpilhados'
import FAQ from './FAQ'
import Infantil from './Infantil'
import Movel from './Movel'
import Rodape from './Rodape'
import TV from './TV'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  
      <Cabecalho/>
       <Banner/>

      <Anuncio/>
      <TV/>

      <DispositivosEmpilhados/>

      
      <Infantil/>

      
      <Movel/>

      
      <FAQ/>

     
      <Rodape/>

    </>
  )
}

export default App
