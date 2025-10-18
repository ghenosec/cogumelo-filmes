import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />

          {/* Google Fonts - Montserrat e Inter */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link 
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@700;800;900&display=swap" 
            rel="stylesheet" 
          />
          
          {/* Otimização para SEO e Redes Sociais */}
          <meta name="description" content="Sua produtora de filmes e pós-produção audiovisual especializada em campanhas publicitárias e projetos independentes. Dê vida à sua visão com a Cogumelo Filmes." />
          <meta property="og:title" content="Cogumelo Filmes | Produção e Pós-Produção Audiovisual de Excelência" />
          <meta property="og:description" content="Sua produtora de filmes e pós-produção audiovisual especializada em campanhas publicitárias e projetos independentes. Dê vida à sua visão com a Cogumelo Filmes." />
          <meta property="og:image" content="URL_DA_SUA_IMAGEM_OG" /> {/* Substitua pela URL de uma imagem para compartilhamento */}
          <meta property="og:url" content="URL_DA_SUA_LANDING_PAGE" /> {/* Substitua pela URL real */}
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Cogumelo Filmes" />
          <meta name="twitter:description" content="Sua produtora de filmes e pós-produção audiovisual de excelência." />
          <meta name="twitter:image" content="URL_DA_SUA_IMAGEM_TWITTER" /> {/* Substitua */}

          {/* Outras meta tags importantes */}
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