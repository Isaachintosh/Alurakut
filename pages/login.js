import React from 'react';
import { useRouter } from 'next/dist/client/router';
import nookies from 'nookies';
import { loginScreen } from '../src/lib/AlurakutCommons'

export default function LoginScreen() {
    const router = useRouter()
    const [ githubUser, setGithubUser ] = React.useState('isaachintosh')

    return (
        <main style={{
            display: 'flex',
            flex: '1',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div className="loginScreen">
                <section className="logoArea glassMorphism">
                    <img src="https://alurakut.vercel.app/logo.svg"/>

                    <p><strong>Conecte-se</strong> aos seus amigos, familiares e colegas usando recados e mensagens instantâneas</p>
                    <p><strong>Conheça</strong> novas pessoas através de seus amigos e comunidades</p>
                    <p><strong>Compartilhe</strong> seus videos, fotos, paixões e projetos em um só lugar</p>
                </section>

                <section className="formArea">
                    <form 
                        className="box glassMorphism"
                        onSubmit={(infosDoEvento) => {
                            infosDoEvento.preventDefault()
                            console.log('Usuário: ', githubUser)
                            fetch('https://alurakut-three-eta.vercel.app//api/login', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({ githubUser: githubUser })
                            })
                            .then(async (respostaDoServer) => {
                                const dadosDaResposta = await respostaDoServer.json()
                                const token = dadosDaResposta.token
                                nookies.set(null, 'USER_TOKEN', token, {
                                    path: '/',
                                    maxAge: 86400 * 7
                                })
                                router.push('/')
                            })
                        }}>
                            <p>
                                Acesse agora mesmo com seu usuário do <strong>Github</strong>!
                            </p>
                            <input
                                placeholder="Usuário"
                                value={githubUser}
                                onChange={(evento) => {
                                    setGithubUser(evento.target.value)
                                }}
                            />
                            {githubUser.lenght === 0 ? 'Preencha o campo' : ''}
                            <button type="submit">Login</button>
                    </form>

                    <footer className="box glassMorphism">
                        <p> Ainda não é membro?</p>
                        <p>
                            <a href="https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home">
                                <strong className="enterNow">
                                    Entrar já!
                                </strong>
                            </a>
                        </p>
                    </footer>
                </section>

                <footer className="footerArea glassMorphism">
                    <p>
                    <a href="https://www.alura.com.br/"> © 2021 alura.com.br </a> | <a href="https://github.com/Isaachintosh"> @isaachintosh </a> - <a href="https://www.alura.com.br/imersao-react"> Sobre a Imersão React </a> - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a> - <a href="/">Termos</a> - <a href="/">Contato</a>
                    </p>
                </footer>
            </div>
        </main>
    )

}