import React from 'react';
import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(properties) {
  return (
    <Box as="aside">
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
  const [communities, setCommunities] = React.useState([{
    id: '2021-07-14-20-12',
    title: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
  }])
  // const communities = []
  const githubUser = `isaachintosh`;
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
      <AlurakutMenu githubUser={githubUser}/> {/** alterar cor para dark theme */}
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={githubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a), {githubUser}
            </h1>
            <OrkutNostalgicIconSet>
            </OrkutNostalgicIconSet>
          </Box>
          <Box>
            <h2 className="subTitle">O que desejas fazer?</h2>
            <form onSubmit={function handleCommunityCreate(e){
              e.preventDefault()
              const dataForm = new FormData(e.target)

              console.log('Campo: ', dataForm.get('title'))
              console.log('Campo: ', dataForm.get('image'))

              const community = {
                id: new Date().toISOString(),
                title: dataForm.get('title'),
                image: dataForm.get('image')
              }
              const updatedCommunities = [...communities, community]
              setCommunities(updatedCommunities)
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
                  name="image" 
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
            <h2 className="smallTitle">
              Comunidades ({communities.length})
            </h2>
            <ul>
              {communities.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image}/>
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da Comunidade ({faviPersons.length})
            </h2>
            <ul>
              {faviPersons.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
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
