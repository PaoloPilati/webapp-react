import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"

export default function DefaultLayout() {
  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        <Loader />
    </>
  )
}