import Menu from "../menu";
import { footerMenu } from "../../Data/menu";
import './style.css'

export default function Footer (){
    return (
        <div className="footer">
            <div className="container">
            <div className="menu">
                    <Menu menuItems={footerMenu} />
                </div>
            </div>
        </div>
    )
}