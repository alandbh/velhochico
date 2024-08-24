export const QUERY_HERO_DATA = `{
    pages(where: {title: "Home"}) {
      nodes {
        title
        conteudoPaginaInicial {
          banner {
            chamada
            imagemDeFundo {
              node {
                sizes
                sourceUrl
                uri
              }
            }
          }
          banner2 {
            chamada
            imagemDeFundo {
              node {
                sizes
                sourceUrl
                uri
              }
            }
          }
        }
      }
    }
  }`;