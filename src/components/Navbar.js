import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; // Import the Material-UI icon
import { useSelector } from 'react-redux';

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);
  return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <h3 className="navbar-item">Redux Toolkit</h3>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <button className="button is-info">
              <ShoppingCartIcon /> {/* Use the Material-UI icon */}
              <span className="cart-item-count">{amount}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
