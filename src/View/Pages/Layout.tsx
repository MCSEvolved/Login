import TopNavbar from "../Components/TopNavbar"
import Footer from "./Footer"
import OutletWrapper from "./OutletWrapper"

export default function Layout() {
  return (
    <div className="flex flex-col bg-MCS-DarkBlue h-screen">
      <TopNavbar />
      <OutletWrapper />
      <Footer />
    </div>
  )
}