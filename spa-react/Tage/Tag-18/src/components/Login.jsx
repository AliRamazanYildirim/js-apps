import { useState } from "react";
import useAuthStore from "../store/useAuthStore"

const Login = () => {
    const {login} = useAuthStore();
    const [fakeUser, setFakeUser] = useState(null);

    const handleLogin = () => {
        const user = {id:1, name: 'Ali'};
        setFakeUser(user.name)
        login(user);
    } ;

    return (
        <div className="login">
            <button onClick={handleLogin}>Login</button>
            {fakeUser && <p>Logged in as: {fakeUser}</p>}
        </div>
    );
};

export default Login;