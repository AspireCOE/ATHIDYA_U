import { useState } from "react";
import { useCookies } from "react-cookie";
import menu from "../../assets/images/menu.png";
import user from "../../assets/images/user.png";
import order from "../../assets/images/order.png";
import address from "../../assets/images/address.png";
import feedback from "../../assets/images/feedback.png";
import back from "../../assets/images/back.png";
import logoutImg from "../../assets/images/logout.png";

const Accounts = () => {
    const [cookie, setCookie] = useCookies(["user"]);
    const [nav, setNav] = useState("5%");
    const [body, setBody] = useState("90vw");
    const [left, setLeft] = useState("5vw");
    const [name, setName] = useState("none");
    const logout = (e) => {
        e.preventDefault();
        setCookie("username", "", { path: "/" });
        setCookie("isLoggedIn", false, { path: "/" });
        window.location.replace("/");
    };
    return (
        <div>
            <div className="account-nav" style={{ width: nav }}>
                <div className="top">
                    <img
                        src={menu}
                        alt=""
                        onClick={(e) => {
                            if (nav === "5%") {
                                setNav("20%");
                                setName("");
                                setBody("80vw");
                                setLeft("10vw");
                            } else {
                                setNav("5%");
                                setName("none");
                                setBody("90vw");
                                setLeft("5vw");
                            }
                        }}
                    />
                    <h2 style={{ display: name }}>MENU</h2>
                </div>
                <div className="options">
                    <div className="link">
                        <img src={user} alt="" />
                        <a href="#myAccount" style={{ display: name }}>
                            MY ACCOUNT
                        </a>
                    </div>
                    <div className="link">
                        <img src={order} alt="" />
                        <a href="#orders" style={{ display: name }}>
                            ORDERS
                        </a>
                    </div>
                    <div className="link">
                        <img src={address} alt="" />
                        <a href="#address" style={{ display: name }}>
                            ADDRESS
                        </a>
                    </div>
                    <div className="link">
                        <img src={feedback} alt="" />
                        <a href="#feedback" style={{ display: name }}>
                            FEEDBACK
                        </a>
                    </div>
                    <div className="link">
                        <img src={back} alt="" />
                        <a
                            href="/home"
                            style={{ display: name }}
                            onClick={(e) => {
                                window.location.replace("/home");
                            }}
                        >
                            BACK TO HOME
                        </a>
                    </div>
                </div>
                <div className="logout" onClick={logout}>
                    <img src={logoutImg} alt="" />
                    <h2 style={{ display: name }}>LOGOUT</h2>
                </div>
            </div>
            <section></section>
            <section></section>
            <section></section>
            <section id="myAccount" style={{ width: body, left: left }}>
                <div className="details">
                    <h2>ACCOUNT DETAILS</h2>
                    <div className="detail">
                        <label htmlFor="">Username</label>
                        <div className="info">admin</div>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Email</label>
                        <div className="info">admin@gmail.com</div>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Phone number</label>
                        <div className="info">1234567890</div>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Address</label>
                        <div className="info">
                            Sample Address,
                            <br /> Sample City,
                            <br /> Sample State
                        </div>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Password</label>
                        <div className="info">********</div>
                    </div>
                    <div className="detail">
                        <label htmlFor="">Change Password</label>
                        <div className="info">
                            <input type="password" />
                        </div>
                    </div>
                </div>
            </section>
            <section id="orders" style={{ width: body, left: left }}>
                <h2 class="heading">Orders</h2>
                <div class="orders-list">
                    <div class="order">
                        <p>Order Id</p>
                        <p>Order Date</p>
                        <p>Downlaod Order List</p>
                        <p>Order Bill</p>
                    </div>
                </div>
            </section>
            <section id="address" style={{ width: body, left: left }}>
                <h2 class="heading">Address</h2>
                <form action="" class="detail-form">
                    <input type="text" placeholder="House Number" />
                    <input type="text" placeholder="Street/Landmark" />
                    <input type="text" placeholder="City/Town" />
                    <input type="text" placeholder="District" />
                    <input type="text" placeholder="State" />
                    <input type="number" placeholder="Pincode" />

                    <button type="submit">Update Details</button>
                </form>
            </section>
            <section id="feedback" style={{ width: body, left: left }}>
                <h2 class="heading">Customer Service</h2>
                <form action="" class="detail-form">
                    <h2>Write to us</h2>
                    <select name="" id="">
                        <option value="">Choose type of feedback</option>
                        <option value="">Order based queries</option>
                        <option value="">Account based queries</option>
                        <option value="">Bugs faced</option>
                        <option value="">Others...</option>
                    </select>
                    <input
                        type="text"
                        placeholder="What you want ot tell us about"
                    />
                    <input type="file" placeholder="Proof" />

                    <button type="submit">Send feedback</button>
                </form>
            </section>
        </div>
    );
};

export default Accounts;
