import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import Loader from "../components/Loader"
import { GlobalProvider, useGlobal } from "../context/GlobalContext"

export default function DefaultLayout() {
  //prendo dal context il valore utile
  const { isLoading } = useGlobal();

  return (
    <>
        <header>
            <Navbar />
        </header>
        <main>
            <Outlet />
        </main>
        {isLoading && <Loader />}
    </>
  )
}