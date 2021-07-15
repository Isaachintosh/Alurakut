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

function ProfileRelationsBox(properties) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {properties.title} ({properties.items.length})
      </h2>
      <ul>
        {/* {properties.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual.title}.png`}>
                <img src={itemAtual.image}/>
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {
  const [communities, setCommunities] = React.useState([
    {
    id: '2021-07-14-20-12',
    title: 'JavaScript',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg'
    },
    {
    id: '2021-07-14-20-22',
    title: 'Next.js',
    image: 'https://images.ctfassets.net/23aumh6u8s0i/c04wENP3FnbevwdWzrePs/1e2739fa6d0aa5192cf89599e009da4e/nextjs'
    },
    {
    id: '2021-07-14-20-32',
    title: 'React',
    image: 'https://www.targethost.com.br/site/wp-content/uploads/2020/04/react-js-target-host.png'
    },
    {
    id: '2021-07-14-20-42',
    title: 'Node.js',
    image: 'https://files.virgool.io/upload/users/308/posts/ohqqokusxblr/pspabny8hklz.png'
    },
    {
    id: '2021-07-14-20-52',
    title: 'Vercel',
    image: 'https://sdtimes.com/wp-content/uploads/2020/04/1_oBm_3saYz4AI_MS6OekdFQ.png'
    },
    // {
    // id: '2021-07-14-21-12',
    // title: 'GitHub',
    // image: 'https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/01/O-Que-e-GitHub-e-Para-Que-e-Usado-.png'
    // }
    
])
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

  
  // 0 - Pegar o array de dados do GitHub 
  const [followers, setSeguidores] = React.useState([])
  React.useEffect(function(){
    fetch('https://api.github.com/users/Isaachintosh/followers')
    .then(function(serverResponse){
      return serverResponse.json()
    })
    .then(function(completeResponse){
      setSeguidores(completeResponse)
    })
  }, []) // esse array vazio indica que a function rodará uma unica vez
  console.log('Seguidores antes do return: ', followers)
  // 1 - Criar um box que terá um map
  //     baseado nos itens do array que pegamos do GitHub
   

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
                  required={true}
                />
              </div>
              <div className="formArea">
                <input 
                  placeholder="Coloque uma URL para usarmos de capa" 
                  name="image" 
                  aria-label="Coloque uma URL para usarmos de capa"
                  required={true}
                />
              </div>
              <button>
                Criar Comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          {/* {followers} */}
          <ProfileRelationsBox title="Seguidores" items={followers}/>
          <ProfileRelationsBoxWrapper>
              <h2 className="smallTitle">
                Comunidades ({communities.length})
              </h2>
              <ul>
                {communities.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                      <div className="FrostedGlass">
                        <a href={`/users/${itemAtual.title}`}>
                          <img src={itemAtual.image}/>
                          <span>{itemAtual.title}</span>
                        </a>
                      </div>
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
