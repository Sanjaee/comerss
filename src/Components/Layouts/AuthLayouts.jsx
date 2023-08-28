import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarkMode";
const AuthLayouts = (props) => {
  const { children, title, type } = props;
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  return (
    <div className={`flex justify-center min-h-screen items-center  ${isDarkMode && "bg-slate-800 text-white"}`}>
      <button className="absolute right-2 top-2 bg-blue-600 p-5 text-white rounded-full hover:opacity-50 mr-9 mt-5" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Light" : "Dark"}
      </button>
      <div className="w-full max-w-xs border rounded-lg border-opacity-75 shadow-md p-4">
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title} </h1>
        <p className="font-medium text-slate-500 ">Welcome, Please enter your details</p>
        {children}
        <p className="text-sm mt-5 text-center">
          {type === "login" ? "Don't have account? " : "Already have an account? "}

          {type === "login" && (
            <Link className="font-bold text-blue-600 hover:text-xl" to="/register">
              Register
            </Link>
          )}
          {type === "register" && (
            <Link className="font-bold text-blue-600 hover:text-xl" to="/login">
              Register
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
