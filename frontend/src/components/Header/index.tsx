import logo from '../../assets/img/logo.svg';
import './styles.css';


function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="DSMeta" />
                <h1>Desenvolvido por</h1>
                <a href="https://www.instagram.com/devsuperior.ig">@dvsuperior.ig</a>
            </div>
        </header>
    )
}

export default Header