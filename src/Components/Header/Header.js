import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          
          <Menu />
          <div className="Buttons ">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>
          <Link to="/cart" className="Cart_ic">
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;