import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex justify-center min-h-screen items-center flex-col bg-slate-800 text-white ">
      <p className="font-bold hover:text-yellow-500">Opss!</p>
      <h1 className="text-3xl hover:text-yellow-500 font-semibold">SORRY PAGE ERROR </h1>
      <p className="hover:text-yellow-500">{error.statusText || error.message} </p>
    </div>
  );
};

export default ErrorPage;
