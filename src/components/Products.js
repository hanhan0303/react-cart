import { useContext } from 'react';
import productsData from '../assets/productsData';
import { CartContext } from '../store';

export default function Products() {
  const [state, dispatch] = useContext(CartContext);

  return (
    <div className="row row-cols-3 g-3">
      {productsData.map((item) => {
        return (
          <div className="col" key={item.id}>
            <div className="card">
              <img src={item.img} className="card-img-top" alt={item.title} />
              <div className="card-body">
                <h6 className="card-title">
                  {item.title}
                  <span className="float-end">NT ${item.price}</span>
                </h6>
                <select
                  className="form-select"
                  name=""
                  id=""
                  value={item.quantity}
                  onChange={(e) => {
                    e.preventDefault();
                    dispatch({
                      type: 'CHANGE_PRODUCT_QUANTITY',
                      payload: {
                        ...item,
                        quantity: parseInt(e.target.value),
                      },
                    });
                  }}
                >
                  {[...Array(20)].map((_, i) => {
                    return (
                      <option value={i + 1} key={i}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <button
                  type="button"
                  className="btn btn-outline-primary w-100"
                  onClick={(e) => {
                    dispatch({
                      type: 'ADD_TO_CART',
                      payload: {
                        ...item,
                        quantity: parseInt(e.target.previousSibling.value),
                      },
                    });
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
