import React from 'react'

const Anuncio = () => {
  return (
        <section className="ad">
      <div className='Pipoca'>
    <img src="/src/assets/images/pipoca-c.png" alt="Pipoca" />
      </div>
    <div className="text-pipoca">
        <h1>A Netflix que você adora por apenas R$ 18,90.</h1>
        <h2>Assine o plano Padrão com anúncios.</h2>
        <a href="">Saiba mais &gt;</a>
    </div>
        </section>
  )
}

export default Anuncio