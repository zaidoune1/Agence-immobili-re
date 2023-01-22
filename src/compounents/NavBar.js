
    import "../styles/NavigationStyle.css";
    import { Link } from 'react-router-dom';
    import {SiHomeadvisor} from "react-icons/si"


    const Navigation = () => {
    return (
        <nav className='nav-bloc'>


            <div className='logo-nav'>
                    <a style={{color:"#FF6060"}} className='link-logo' href='/'>k<SiHomeadvisor className="icon-logo"/>ASA</a>
            </div>

            <div className='links-bloc'>            
                <Link style={{color:"#FF6060"}} className='A-propos' to={"/"}> Accueil</Link>
                <Link style={{color:"#FF6060"}}  className='A-propos link-accueil' to={"/A-propos"}>A propos</Link>                    
            </div>

        </nav>
    );
    }

    export default Navigation;