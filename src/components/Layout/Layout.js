import { Fragment } from "react"
import Footer from "./Footer";
import Header from "./Header"

const Layout = (props) => {
    return <div className="bg-zinc-200">
        <Header/>
        <main className="m-5">{props.children}</main>
        <Footer />
    </div>
}

export default Layout;