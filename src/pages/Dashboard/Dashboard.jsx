import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import User from "./User/User";


const Dashboard = () => {

    const { user } = useContext(AuthContext);

    if (!user) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {
                user.role === 'user' && <User></User>
            }

        </div>
    );
};

export default Dashboard;