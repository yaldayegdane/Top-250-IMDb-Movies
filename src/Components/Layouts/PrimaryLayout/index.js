import { Fragment } from "react";
import Footer from "../../Footer";
import Header from "../../Header";

export default function Primary({ children }) {
    return (
        <Fragment>
        <Header />
        {children}
        <Footer />
        </Fragment>
    )
}