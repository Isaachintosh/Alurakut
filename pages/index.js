import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
// import Forms from '../src/components/Forms';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons'
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(properties) {
  return (
    <Box>
      <img src={`https://github.com/${properties.githubUser}.png`} className="borderPerfil" style={{ borderRadius: '12px' }}/>
      <hr/>
      <p>
        <a className="boxLink" href={`https://github.com/${properties.githubUser}`}>
          @{properties.githubUser}
        </a>
      </p>
      <hr/>
      <AlurakutProfileSidebarMenuDefault></AlurakutProfileSidebarMenuDefault>
    </Box>
  )
}

export default function Home() {
  const randomUser = `isaachintosh`;
  const communities = []
  const faviPersons = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  return (
    <>
      <AlurakutMenu /> {/** alterar cor para dark theme */}
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={randomUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo
            </h1>
            <OrkutNostalgicIconSet>
            </OrkutNostalgicIconSet>
          </Box>
          <Box>
            <h2 className="subTitle">O que desejas fazer?</h2>
            <form onSubmit={function handleCommunityCreate(e){
              e.preventDefault()
              
            }}>
              <div className="formArea">
                <input 
                  placeholder="Qual será o nome da sua comunidade?" 
                  name="title" 
                  aria-label="Qual será o nome da sua comunidade?"
                  type="text"
                  
                />
              </div>
              <div className="formArea">
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="title" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  
                />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle"> {/** alterar cor para dark theme */}
              Pessoas da Comunidade ({faviPersons.length})
            </h2>
            <ul>
              {faviPersons.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades</h2>
            <ul>
              {faviPersons.map((itemAtual) => {
                return (
                  <li>
                    <a href={`/users/${itemAtual}`} key={itemAtual}>
                      <img src={`https://github.com/${itemAtual}.png`}/>
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
