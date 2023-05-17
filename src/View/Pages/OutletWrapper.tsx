import { Outlet } from "react-router-dom";

export default function OutletWrapper() {
  return (
    <div className="flex-grow">
      <Outlet />
    </div>
  )
}