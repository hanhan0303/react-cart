import { useContext } from 'react';
import { CartContext } from '../../store';

export default function Cart() {
  const [state, dispatch] = useContext(CartContext);
  return (
    <div className="bg-light p-3">
      <table className="table algin-middle">
        <tbody>
          {state.cartList.map((item) => {
            return (
              <tr key={item.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-sm"
                    onClick={(e) => {
                      dispatch({
                        type: 'REMOVE_CART_ITEM',
                        payload: {
                          ...item,
                        },
                      });
                    }}
                  >
                    x
                  </button>
                </td>
                <td>
                  <img
                    src={item.img}
                    className="table-image"
                    alt={item.title}
                  />
                </td>
                <td>
                  {item.title}
                  <br />
                  <small className="text-muted">NT$ {item.price}</small>
                </td>
                <td>
                  <select
                    className="form-select"
                    name=""
                    id=""
                    value={item.quantity}
                    onChange={(e) => {
                      e.preventDefault();
                      dispatch({
                        type: 'CHANGE_CART_QUANTITY',
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
                </td>
                <td className="text-end">NT$ {item.quantity * item.price}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={5} className="text-end">
              總金額 NT$ {state.total || 0}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
