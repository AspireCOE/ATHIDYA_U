import { useCookies } from "react-cookie";
import { useState } from "react";
import loginBg from "../../assets/images/loginBackground.svg";
import bgImg from "../../assets/images/login-img.png";
import animate from "../../assets/images/animate.png";
import axios from "axios";
import URL from "../../URL";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie] = useCookies(["user"]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .get(
                URL +
                    "/api/v1/login?username=" +
                    username +
                    "&password=" +
                    password
            )
            .then((resp) => {
                if (resp.data === true) {
                    setCookie("username", username, { path: "/" });
                    setCookie("isLoggedIn", true, { path: "/" });
                    window.location.replace("/home");
                } else {
                    if (window.confirm("Not registered yet ?")) {
                        window.location.href = "/signup";
                    }
                }
            });
    };

    return (
        <div className="login-form-container">
            <div className="login-bg">
                <img src={loginBg} alt="" />
            </div>
            <div className="login-form">
                <form action="">
                    <div className="heads">
                        <h2>LOGIN</h2>
                    </div>
                    <div className="inputs">
                        <input
                            type="text"
                            placeholder="Enter username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <hr />
                    <div className="links">
                        <div className="signup">
                            <p>Are you a new User ? </p>
                            <a href="/signup">Register</a>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            onSubmit={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <img src={bgImg} alt="" className="bg-img" />
            <img src={animate} alt="" className="login-animate" />
        </div>
    );
};

export default Login;
