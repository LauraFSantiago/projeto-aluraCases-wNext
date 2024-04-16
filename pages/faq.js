// import Link from 'next/link'
// import Head from 'next/head'
//
import FAQScreen from '../src/screens/FAQScreen';

export default FAQScreen; 

// import { useEffect, useState } from 'react';

// SSG - Static Site Generation
// SSR - Server Side Rendering
// ISG - Incremental Static Generation

export async function getStaticProps() {
  //metodo melhor de fazer com o next, pq ele ja traz o conteudo pre carregado, diferente do useEffect
  const URL_DA_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  const faq = await fetch(URL_DA_API)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    })
  return {
    props: {
      // qualquercoisa: 'q for passado aqui'; vai ser recebido como prop na function faqpage
      faq //a gente pega no props as respostas do faq
    }
  }
}

// export default function FAQPage({ faq }) {
  // console.log(props);
  //para aparecer na tela precisamos de um state
  // const [faq, setFaq] = useState([]);

  // useEffect(() => {
  //   const URL_DA_API = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json';
  //   fetch(URL_DA_API)
  //     //para observar a resposta
  //     .then((respostaDoServidor) => {
  //       return respostaDoServidor.json();//aqui esta sendo solicitado se vier json converter para um obj js
  //     })
  //     .then((resposta) => {
  //       //depois q pega a resposta tem q fazer o setFaq para aparecer em tela
  //       setFaq(resposta);
  //       // console.log(resposta);
  //     })
  // }, []);

  // return (
  //   <div>
  //     <Head>
  //         <title>FAQ - Alura Cases Campanha</title>
  //     </Head>
  //     <h1>Alura Cases - Páginas de Perguntas FAQ</h1>
  //     <Link href="/"> home page </Link>
  //     <ul>
  //       {faq.map(({ answer, question }) => (
  //         <li key={question}>
  //           <article>
  //             <h2>{question}</h2>
  //             <p>{answer}</p>
  //           </article>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // )
// }