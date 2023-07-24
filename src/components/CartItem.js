import { removeItem, increase, decrease } from '../features/cart/cartSlice';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward'; 
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'; 
import { useDispatch } from 'react-redux';

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className='media'>
      <figure className="media-left">
        <p className="image is-64x64">
          <img src={img} alt={title} />
        </p>
      </figure>
      <div className="media-content">
        <div className="content">
          <h4>{title}</h4>
          <h4 className='item-price'>${price}</h4>
          <button
            className='button is-small is-danger'
            onClick={() => {
              dispatch(removeItem(id));
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <div className="media-right">
        <div className="field is-grouped">
          <p className="control">
            <button
              className='button is-primary is-small'
              onClick={() => {
                dispatch(increase({ id }));
              }}
            >
              <ArrowUpwardIcon /> {/* Use the Material-UI icon */}
            </button>
          </p>
          <p className="control">
            <span className="amount">{amount}</span>
          </p>
          <p className="control">
            <button
              className='button is-primary is-small'
              onClick={() => {
                if (amount === 1) {
                  dispatch(removeItem(id));
                  return;
                }
                dispatch(decrease({ id }));
              }}
            >
              <ArrowDownwardIcon /> {/* Use the Material-UI icon */}
            </button>
          </p>
        </div>
      </div>
    </article>
  );
};
export default CartItem;