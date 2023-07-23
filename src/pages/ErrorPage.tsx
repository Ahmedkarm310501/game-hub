import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import NavBar from "../components/NavBar";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div className=" dark:bg-primary dark:text-white min-h-screen ">
      <div className="col-span-full shadow mb-3 p-2">
        <NavBar />
      </div>
      <div className="text-center">
        <h1>Oops</h1>
        <p>
          {isRouteErrorResponse(error)
            ? "this page does not exist"
            : "An unexpected error occurred"}
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
