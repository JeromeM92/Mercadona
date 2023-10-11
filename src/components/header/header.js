import MercadonaLogo from '../../assets/logo-mercadona.png'
import HeaderStyle from '../header/header-style.css'

export default function Header() {
    return (
        <header>
            <img src={MercadonaLogo} id="logo"/>
            <h1 id="site-name"> Fake site web <br/> Mercadona</h1>
        </header>
    )
}