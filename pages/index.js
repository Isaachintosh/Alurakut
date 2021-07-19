import React, { useState, useEffect } from 'react';
import nookies from 'nookies'
import jwt from 'jsonwebtoken'
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

export default function Home(props) {
  const [isShowingMoreFriends, setIsShowingMoreFriends] = useState(false);
  const [isShowingMoreFollowers, setIsShowingMoreFollowers] = useState(false);
  const [isShowingMoreCommunities, setIsShowingMoreCommunities] =
    useState(false);
  const [communities, setCommunities] = React.useState([])
  // const communities = []
  const githubUser = props.githubUser;
  const faviPersons = [
    'juunegreiros',
    'omariosouto',
    'peas',
    'rafaballerini',
    'marcobrunodev',
    'felipefialho'
  ]
  const [followers, setSeguidores] = React.useState([])
  // 0 - Pegar o array de dados do GitHub 
  React.useEffect(function(){
    fetch(`https://api.github.com/users/${githubUser}/followers`)
    .then(function(serverResponse){
      return serverResponse.json()
    })
    .then(function(completeResponse){
      setSeguidores(completeResponse)
      return followers
      console.log(followers)
    })

    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '7aff5873d646645909d5449398c478',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id
          title
          imageUrl
          creatorSlug
        }
      }`})
    })
    .then((response) => response.json())
    .then((completeResponse) => {
      const communitiesFromDatoCMS = completeResponse.data.allCommunities;
      console.log(communitiesFromDatoCMS)
      setCommunities(communitiesFromDatoCMS);
    })
    .catch((error) => {
      console.log(error)
    })

  }, [])

  function handleShowMoreFollowers(e) {
    e.preventDefault();
    setIsShowingMoreFollowers(!isShowingMoreFollowers);
  }

  function handleShowMoreFriends(e) {
    e.preventDefault();
    setIsShowingMoreFriends(!isShowingMoreFriends);
  }

  function handleShowMoreCommunities(e) {
    e.preventDefault();
    setIsShowingMoreCommunities(!isShowingMoreCommunities);
  }
   

  return (
    <>
      <AlurakutMenu githubUser={githubUser}/>
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
                title: dataForm.get('title'),
                imageUrl: dataForm.get('image'),
                creatorSlug: githubUser
              }

              fetch('/api/communities', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(community)
              })
              .then(async (response) => {
                const data = await response.json()
                console.log(data.recordCreated)
                const community = data.recordCreated
                const updatedCommunities = [...communities, community]
                setCommunities(updatedCommunities)
              })
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
          
          <ProfileRelationsBoxWrapper
            title="Seguidores"
            items={followers}
            isShowingMoreItems={isShowingMoreFollowers}
          >
            <h2 className="smallTitle">
              Seguidores ({followers.length})
            </h2>
            <ul>
            {followers.map((itemAtual) => {
              return (
                <li key={itemAtual.id}>
                  <a
                    href={`https://github.com/${itemAtual.login}`}
                    target="_blank"
                  >
                    <img src={itemAtual.avatar_url}/>
                    <span>{itemAtual.title}</span>
                  </a>
                </li>
              )
            })}
          </ul>
          {followers.length > 6 && (
            <div className="showMoreFollowers">
              <hr />
              <button
                className="toggleButton"
                onClick={(e) => handleShowMoreFollowers(e)}
              >
                {isShowingMoreFollowers ? 'Ver menos' : 'Ver mais'}
              </button>
            </div>
          )}
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper isShowingMoreItems={isShowingMoreCommunities}>
              <h2 className="smallTitle">
                Comunidades ({communities.length})
              </h2>
              <ul>
                {communities.map((itemAtual) => {
                  return (
                    <li key={itemAtual.id}>
                        <a href={`/communities/${itemAtual.id}`}>
                          <img src={itemAtual.imageUrl}/>
                          <span>{itemAtual.title}</span>
                        </a>
                    </li>
                  )
                })}
              </ul>
              {communities.length > 6 && (
              <div className="showMoreCommunities">
                <hr />
                <button
                  className="toggleButton"
                  onClick={(e) => handleShowMoreCommunities(e)}
                >
                  {isShowingMoreCommunities ? 'Ver menos' : 'Ver mais'}
                </button>
              </div>
            )}
            </ProfileRelationsBoxWrapper>
            <ProfileRelationsBoxWrapper
            isShowingMoreItems={isShowingMoreFriends}>
              <h2 className="smallTitle">
                Pessoas da Comunidade ({faviPersons.length})
              </h2>
              <ul>
                {faviPersons.map((itemAtual) => {
                  return (
                    <li key={itemAtual}>
                      <a href={`https://github.com/${itemAtual}`}>
                        <img src={`https://github.com/${itemAtual}.png`} />
                        <span>{itemAtual}</span>
                      </a>
                    </li>
                  )
                })}
              </ul>
              {faviPersons.length > 6 && (
                <>
                  <hr />
                  <button 
                    className="toggleButton"
                    onClick={(e) => handleShowMoreFriends(e)}
                  >{isShowingMoreFriends ? 'Ver menos' : 'Ver mais'}</button>
                </>
              )}
            </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context)
  const token = cookies.USER_TOKEN
  const decodedToken = jwt.decode(token)
  const githubUser = decodedToken?.githubUser
  const { isAuthenticated } = await fetch('https://alurakut.vercel.app/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((response) => response.json())
  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }

  
  return {
    props: {
      githubUser
    }
  }
}
