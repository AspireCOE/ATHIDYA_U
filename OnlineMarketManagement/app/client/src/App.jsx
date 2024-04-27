import "./assets/css/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import PrivateRoute from "./components/auth/PrivateRoute";

const App = () => {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/home" element={<PrivateRoute to="/home" />} />
                    <Route
                        path="/account"
                        element={<PrivateRoute to="/account" />}
                    />
                    <Route
                        path="/products"
                        element={<PrivateRoute to="/products" />}
                    />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
