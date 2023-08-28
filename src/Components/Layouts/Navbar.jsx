import Button from "../Elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);
  const { total } = useTotalPrice();

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.quantyty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "./login";
  };
  return (
    <div className="flex justify-end h-20 bg-blue-600 text-white items-center px-10 font-bold">
      <h1 className="mr-96 text-2xl text-black hover:text-white">EZA STORE</h1>
      <p className="text-2xl ">{username}</p>
      <Button classname="ml-5 bg-black hover:opacity-50" onClick={handleLogout}>
        LOGOUT
      </Button>
      <div className="flex items-center bg-gray-950 p-2 rounded-md ml-5">
        Item : {totalCart} | Price : $ {total}
      </div>
      <Button classname=" bg-black px-10 mx-5 text-white rounded mr-5 hover:opacity-50 " onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default Navbar;
