import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import { useCookies } from "react-cookie";

const Navbar = () => {
    const [cookie, setCookie] = useCookies(["user"]);
    const [cart, setCart] = useState("none");
    const loggedIn = document.cookie.split("; ")[1].split("=")[1];
    const [link, setLink] = useState("");
    const logout = (e) => {
        e.preventDefault();
        setCookie("username", "", { path: "/" });
        setCookie("isLoggedIn", false, { path: "/" });
        window.location.replace("/");
    };
    return (
        <nav style={{ zIndex: 1 }}>
            <div
                className="nav-div1"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.replace("/home");
                }}
            >
                <img src={logo} alt="" />
                <h1>Online Market</h1>
            </div>
            <div className="nav-div2">
                <input
                    type="text"
                    className="search"
                    placeholder="Search ..."
                />
            </div>
            <div className="nav-div3">
                <a href="/products">PRODUCTS</a>
                <a
                    href=""
                    onClick={(e) => {
                        e.preventDefault();
                        setCart("");
                    }}
                >
                    CART
                </a>
                <a href="/account">ACCOUNT</a>
                <a href="/" onClick={logout}>
                    {loggedIn ? "LOGOUT" : "LOGIN"}
                </a>
            </div>
            <div className="cart" style={{ display: cart }}>
                <div
                    className="close"
                    onClick={(e) => {
                        setCart("none");
                    }}
                >
                    X
                </div>
                <h2>CART</h2>
                <div className="list">
                    <div className="item">
                        <p>Product Id</p>
                        <p>Product name</p>
                        <p>Quantity</p>
                        <p>Price</p>
                    </div>
                    <div className="item">
                        <p>1</p>
                        <p>Apples</p>
                        <p>4</p>
                        <p>40</p>
                    </div>
                </div>
                <button className="checkout">Checkout</button>
            </div>
        </nav>
    );
};

export default Navbar;
