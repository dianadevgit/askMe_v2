import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
/*No react importa a imagem ao invez de usar direto o endereco no src*/

import '../styles/auth.scss'
import { Button } from '../components/Button';

export function Home(){
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustration for questions and answers"/>
                <strong>The Create rooms for Q&amp;A</strong>
                <p>Ask questions to your audience in real time</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="AskMe"/>
                    <button className="create-room">
                        <img src={googleIconImg} alt="Google Logo"/>
                        Create your room with Google
                    </button>
                    <div className="separator">or entry room</div>
                    <form>
                        <input
                          type="text"
                          placeholder="Type the room code"  
                        />
                        <Button type="submit">Enter room</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}