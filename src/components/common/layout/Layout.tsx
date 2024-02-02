import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="max-w-7xl w-full p-10">
      <h2>i am layout</h2>
      <Outlet />
    </div>
  );
}
