
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'

function ProfileSidebar(properties) {
  return (
    <Box>
      <img src={`https://github.com/${properties.githubUser}.png`} style={{ borderRadius: '99px' }}/>
    </Box>
  )
}

export default function Home() {
  const randomUser = `isaachintosh`;
  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <ProfileSidebar githubUser={randomUser}/>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem Vindo
        </Box>
        <Box>
          Postagens
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
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
