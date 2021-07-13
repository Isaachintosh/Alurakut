import styled from 'styled-components'

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `

const Box = styled.div`
  background: #424242;
  border-radius: 8px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.37);
  
`
const MainGrid = styled.main `
  width: 100%;
  grid-gap: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  padding: 16px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }
  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;

  }
`;

export default function Home() {
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          Imagem
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem Vindo
        </Box>
      </div>
      <div className="" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Pessoas da comunidade
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
