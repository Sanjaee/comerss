import { useEffect, useRef, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice, useTotalPriceDispatch } from "../../context/TotalPriceContext";

const TableCart = (props) => {
  const { products } = props;
  const cart = useSelector((state) => state.cart.data);
  const { isDarkMode } = useContext(DarkMode);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + item.quantyty + product.price;
      }, 0);
      dispatch({
        type: "UPDATE",
        payload: {
          total: sum,
        },
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  const totalPirceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPirceRef.current.style.display = "table-row";
    } else {
      totalPirceRef.current.style.display = "none";
    }
  }, [cart, products]);

  return (
    <table className={`text-left table-auto border-separate border-spacing-x-5 ${isDarkMode && "text-white"}`}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((product) => product.id === item.id);

            return (
              <tr key={item.id}>
                <td>{product.title.substring(0, 10)}...</td>
                <td>$ {product.price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</td>
                <td>{item.quantyty}</td>
                <td>$ {(item.quantyty * product.price).toLocaleString("id-ID")}</td>
              </tr>
            );
          })}
        <tr ref={totalPirceRef}>
          <td colSpan={3}>
            <b>Total Price</b>
          </td>
          <td>
            <b>$ {total.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}</b>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableCart;
