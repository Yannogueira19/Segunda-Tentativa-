import React, { useState } from 'react'

const Cabecalho = () => {
  const [idioma, setIdioma] = useState('pt-br')

  return (
    <header>
      <div className="container nav">
        <div className="logo">
          <img src="/src/assets/images/Logonetflix.png" alt="Logo Netflix" />
        </div> 
        <div className="right-side">
          <select
            value={idioma}
            onChange={(e) => setIdioma(e.target.value)}
          >
            <option value="pt-br">Português</option>
            <option value="en">English</option>
          </select>
          <a href="/login" className="button">Entrar</a>
        </div>
      </div>       
    </header>
  )
}

export default Cabecalho