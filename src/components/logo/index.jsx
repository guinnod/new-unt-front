import logo from "../../media/logo.png";
import { Link } from "react-router-dom";
import "./logo.css";
import { useEffect, useState } from "react";
export const Logo = () => {
    const [link, setLink] = useState("/home");
    useEffect(() => {
        if (
            window.location.pathname.includes("/login") ||
            window.location.pathname.includes("/register")
        ) {
            setLink("/");
        }
    }, []);
    return (
        <Link to={link}>
            <div className="logo__anchor">
                <img src={logo} alt="logo" className="logo__img" />
                <div className="logo__text">UNT Informatics</div>
            </div>
        </Link>
    );
};
