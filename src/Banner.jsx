import React, { useState } from 'react'

const Banner = () => {
  const [email, setEmail] = useState('')

  return (
    <section className="text-banner">
      <h1>Filmes, séries e muito mais, sem limites</h1>
      <h2>Assista onde quiser. Cancele quando quiser.</h2>
      <h3>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
      <div className="email-banner">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <a href="" className="button">Vamos lá &gt;</a>
      </div>
    </section>
  )
}

export default Banner