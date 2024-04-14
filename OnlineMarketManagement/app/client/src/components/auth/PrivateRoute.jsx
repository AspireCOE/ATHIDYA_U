import Accounts from "../func/Accounts";
import Home from "../func/Home";
import Products from "../func/Products";
import Login from "./Login";

const PrivateRoute = (props) => {
    const auth = authenticate();
    if (auth) {
        switch (props.to) {
            case "/home":
                return <Home />;
            case "/account":
                return <Accounts />;
            case "/product":
                return <Products />;
            default:
                return <Login />;
        }
    }
};

function authenticate() {
    const cookie = document.cookie;
    return cookie.username !== null;
}

export default PrivateRoute;
