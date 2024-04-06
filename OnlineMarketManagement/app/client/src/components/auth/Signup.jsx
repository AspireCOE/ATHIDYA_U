import { useCookies } from "react-cookie";
import { useState } from "react";
import loginBg from "../../assets/images/loginBackground.svg";
import bgImg from "../../assets/images/login-img.png";
import animate from "../../assets/images/animate.png";
import axios from "axios";
import URL from "../../URL";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [err, setErr] = useState("");
    const [valid, setValid] = useState(false);

    const hasUpperCase = (str) => /[A-Z]/.test(str);
    const hasNumeric = (str) => /[0-9]/.test(str);

    const handleSignup = (e) => {
        e.preventDefault();
        let data = {
            username: username,
            password: password,
            email: email,
            phone: parseInt(phone),
        };
        if (valid) {
            axios
                .post(URL + "/api/v1/register", data)
                .then((resp) => {
                    if (resp.data === true) {
                        window.location.replace("/");
                    } else {
                        alert("Registration failed please try again ...");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    return (
        <div className="login-form-container">
            <div className="login-bg">
                <img src={loginBg} alt="" />
            </div>
            <div className="login-form">
                <form action="">
                    <div className="heads">
                        <h2>Signup</h2>
                    </div>
                    <div className="signup-inputs">
                        <input
                            type="text"
                            placeholder="Enter username"
                            onChange={(e) => {
                                setUsername(e.target.value);
                                if (username.length < 7) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else if (!hasUpperCase(username)) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else if (!hasNumeric(username)) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else {
                                    if (
                                        username.length >= 8 &&
                                        hasUpperCase(username) &&
                                        hasNumeric(username)
                                    ) {
                                        setValid(true);
                                    }
                                    e.target.style = {
                                        border: "#ccff33 3px solid",
                                        color: "#ccff33",
                                    };
                                }
                            }}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Enter password"
                            onChange={(e) => {
                                setPassword(e.target.value);
                                if (password.length <= 7) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else if (!hasUpperCase(password)) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else if (!hasNumeric(password)) {
                                    e.target.style.border = "red 3px solid";
                                    e.target.style.color = "red";
                                } else {
                                    if (
                                        password.length >= 8 &&
                                        hasUpperCase(password) &&
                                        hasNumeric(password)
                                    ) {
                                        setValid(true);
                                    }
                                    e.target.style = {
                                        border: "#ccff33 3px solid",
                                        color: "#ccff33",
                                    };
                                }
                            }}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Enter phonenumber"
                            onChange={(e) => {
                                setPhone(e.target.value);
                            }}
                            required
                        />
                    </div>
                    <hr />
                    <div className="links">
                        <div className="signup">
                            <p>Already a User ? </p>
                            <a href="/">Login</a>
                        </div>
                        <button
                            type="submit"
                            onClick={handleSignup}
                            onSubmit={handleSignup}
                        >
                            Submit
                        </button>
                    </div>
                </form>
                <div className="rules" style={{ display: err }}>
                    <div
                        className="close"
                        onClick={(e) => {
                            setErr("none");
                        }}
                    >
                        X
                    </div>
                    <dl>
                        <dt>Username and password must contain</dt>
                        <dd>Atleast 8 characters</dd>
                        <dd>Atleast one capital letter</dd>
                        <dd>Atleast one numeric value</dd>
                    </dl>
                </div>
            </div>
            <img src={bgImg} alt="" className="bg-img" />
            <img src={animate} alt="" className="login-animate" />
        </div>
    );
};

export default Signup;
