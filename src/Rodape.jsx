import React, { useState } from 'react'

const linksRodape = [
  'Perguntas frequentes',
  'Relações com investidores',
  'Formas de assistir',
  'Informações corporativas',
  'Central de Ajuda',
  'Carreiras',
  'Termos de Uso',
  'Entre em contato',
  'Conta',
  'Resgatar cartão pré-pago',
  'Privacidade',
  'Teste de velocidade',
  'Media Center',
  'Comprar cartão pré-pago',
  'Preferências de cookies',
  'Avisos legais',
  'Só na Netflix',
]

const Rodape = () => {
  const [idioma, setIdioma] = useState('pt-br')

  return (
    <footer className="container">
      <div className="footer-fone">Dúvidas? Ligue <span>0800 591 2876</span></div>
      <div className="features">
        {linksRodape.map((link, index) => (
          <a key={index} href="#">{link}</a>
        ))}
      </div>
      <div className="back-side">
        <select
          value={idioma}
          onChange={(e) => setIdioma(e.target.value)}
        >
          <option value="pt-br">Português</option>
          <option value="en">English</option>
        </select>
      </div>
      <p>Netflix Brasil</p>
    </footer>
  )
}

export default Rodape