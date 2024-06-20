import { Link } from "react-router-dom";
import Menu from "../menu";
import "./style.css";
import { headerMenu } from "../../Data/menu";
import Search from "./Search";

export default function Header (){
    return (
            <div className="header">
                <div className="container">
                <div className="header-container">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.svg" alt=""/>
                        </Link>
                </div>
                <div className="menu">
                        <Menu menuItems={headerMenu}/>
                </div>
                <Search />
                </div>
                </div>
            </div>
    )
}