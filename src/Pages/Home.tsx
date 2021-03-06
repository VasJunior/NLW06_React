
import { useHistory } from 'react-router-dom'

import illustrationImg from '../Assets/images/illustration.svg';
import logoImg from '../Assets/images/logo.svg';
import googleIconImg from '../Assets/images/google-icon.svg';

import { Button } from '../Components/Button';

import '../Styles/auth.scss';
import { useAuth } from '../Hooks/useAuth';

export function Home() {
    const history = useHistory();
    const { signInWithGoogle, user } = useAuth();

    async function handleCreateRoom() {
        if(!user){
            await signInWithGoogle()
        }

        history.push('/rooms/new')
    }



    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas da sua audiencia em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}