import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" 
            rel="stylesheet" 
          />
          <meta name="description" content="Sua produtora de filmes e pós-produção audiovisual especializada em campanhas publicitárias e projetos independentes. Dê vida à sua visão com a Cogumelo Filmes." />
          <meta property="og:title" content="Cogumelo Filmes | Produção e Pós-Produção Audiovisual de Excelência" />
          <meta property="og:description" content="Sua produtora de filmes e pós-produção audiovisual especializada em campanhas publicitárias e projetos independentes. Dê vida à sua visão com a Cogumelo Filmes." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;