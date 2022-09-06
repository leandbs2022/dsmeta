import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                <img src={logo} alt=""></img>
                        <h1>DSMeta</h1>
                        <p>Desenvolvido por <a href="https://www.instagram.com/devsuperior.ig/?hl=pt" target="_black">@devsuperior.ig</a></p>
                </div>
            </header>
        </>
    )
}
export default Header



