// importo outer del modulo react-router
import { Outlet } from "react-router-dom"
import Header from "../components/Header"


const DefaultLayout = () => {
    return (
        <>
            <Header></Header>
            <Outlet />
        </>
    )
}


export default DefaultLayout