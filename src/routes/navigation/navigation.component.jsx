import { Outlet, Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../assets/images/icons/logo.svg"
import './navigation.styles.css';
import { observer } from "mobx-react";
import CartStore from "../../store/CartStore";

const Navigation = observer(() => {
    const {cartCount} =  CartStore;

    return (
        <>
            <div className="nav-container">
                <Link to='/'>
                    <Logo className="logo"/>
                </Link>
                
                <div className="nav-links-container">
                    <Link to='/cart' className="nav-link">
                        My Cart ({cartCount})
                    </Link>

                    <Link to='/about' className="nav-link">
                        About
                    </Link>

                    <Link to='/contact' className="nav-link">
                        Contact
                    </Link>

                    <Link to='/sign-in' className="nav-link">
                        Register
                    </Link>
                </div>
            
            </div>
        <Outlet/>
        </>
    )
});

export default Navigation;