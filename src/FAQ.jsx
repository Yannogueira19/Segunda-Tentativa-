import React, { useState } from 'react'

const dadosFAQ = [
  {
    pergunta: 'O que é a Netflix?',
    resposta: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries, filmes e documentários premiados em milhares de aparelhos conectados à internet. Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.'
  },
  {
    pergunta: 'Quanto custa a Netflix?',
    resposta: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 18,90 a R$ 55,90 por mês. Sem contrato nem taxas extras.'
  },
  {
    pergunta: 'Onde posso assistir?',
    resposta: 'Assista onde quiser, quando quiser. Faça login com sua conta Netflix em netflix.com para começar a assistir no computador ou em qualquer aparelho conectado à Internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.'
  },
  {
    pergunta: 'Como faço para cancelar?',
    resposta: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.'
  },
  {
    pergunta: 'O que posso assistir na Netflix?',
    resposta: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.'
  },
  {
    pergunta: 'A Netflix é adequada para crianças?',
    resposta: 'A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.'
  }
]

const FAQ = () => {
  const [itemAberto, setItemAberto] = useState(null)
  const [email, setEmail] = useState('')

  const alternarItem = (index) => {
    setItemAberto(itemAberto === index ? null : index)
  }

  return (
    <section className="container faq">
      <h1>Perguntas Frequentes</h1>
      <dl className="js-accordion">
        {dadosFAQ.map((item, index) => (
          <React.Fragment key={index}>
            <dt
              className={itemAberto === index ? 'active' : ''}
              onClick={() => alternarItem(index)}
            >
              {item.pergunta}
            </dt>
            <dd className={itemAberto === index ? 'active' : ''}>
              {item.resposta}
            </dd>
          </React.Fragment>
        ))}
      </dl>
      <h3>Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.</h3>
      <div className="email-faq">
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

export default FAQ