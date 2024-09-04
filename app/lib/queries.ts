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

  export const QUERY_CHAMADA_HOME = `
  {
    pages(where: {title: "Home"}) {
      nodes {
        title
        conteudoPaginaInicial {
         chamada {
          titulo
          textoDaChamada
        }
        }
      }
    }
  }
  `
  export const QUERY_CONTEUDO_DESTAQUE = `{
    pages(where: {title: "Home"}) {
      nodes {
        title
        conteudoPaginaInicial {
          destaque {
            texto
            imagem {
              node{
                sourceUrl
              }
            }
          }
         
        }
      }
    }
  }`

  export const QUERY_ROOMS_LIST = `{
    acomodacoes {
      nodes {
        slug
        title
        databaseId
        informacoesDaAcomodacao {
          textoDeChamada
          thumbnail {
            node {
              mediaDetails {
                filteredSizes(sizes: "medium") {
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }`

  export const QUERY_GALLERY_HOME = `{
    pages(where: {title: "Home"}) {
      nodes {
        conteudoPaginaInicial {
          galeriaDeFotosDaHome {
            nodes {
              sourceUrl
            }
          }
        }
      }
    }
  }`

  export const QUERY_CULINARIA = `{
    pages(where: {title: "Culinária"}) {
      nodes {
        title
        databaseId
        pageContent {
          banner3 {
            node {
              sourceUrl
            }
          }
          chamada3 {
            titulo
            textoDaChamada
          }
          itensdaculinaria3 {
            titulo
            descricao
            imagem {
              node {
                sourceUrl
              }
            }
          }
          galeriaDeFotos3 {
            nodes {
              sourceUrl
            }
          }
        }
      }
    }
  }`

  export const QUERY_ACOMODACOES = `{
    pages(where: {title: "Acomodações"}) {
      nodes {
        title
        databaseId
        contentPage {
          banner4 {
            node {
              sourceUrl
            }
          }
          chamada4 {
            titulo
            textoDaChamada
          }
        }
      }
    }
  }`

  export const QUERY_SINGLE_ROOM = `query GetRoomBySlug($roomPath: String!) {
    nodeByUri(uri: $roomPath) {
      __typename
      ... on Acomodacao {
        title
        informacoesDaAcomodacao {
          thumbnail {
            node {
              sourceUrl
            }
          }
          textoDeChamada
          caracteristicasDoChale
          fotosDesteChale {
            nodes {
              sourceUrl
            }
          }
        }
      }
    }
  }`