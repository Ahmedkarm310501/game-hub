import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Layout() {
  return (
    <>
      <div className=" dark:bg-primary dark:text-white min-h-screen grid sm:grid-cols-[200px_1fr] gap-1 grid-rows-[auto_1fr]">
        <div className="col-span-full shadow mb-3 p-2">
          <NavBar />
        </div>
        <Outlet />
      </div>
    </>
  );
}
