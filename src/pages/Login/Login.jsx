import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/bouncy-logo.png';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(AuthContext);

    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const emailOrPhone = form.emailOrPhone.value; // Update this line
        const pin = form.pin.value;

        try {
            const userInfo = {
                emailOrPhone, // Update property name
                pin,
            };

            const response = await axios.post('http://localhost:5000/login', userInfo);

            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                console.log(response.data);
                setUser(response.data.user);
                navigate('/dashboard');
                toast.success("Login Successful");
                // Redirect to another page or handle success
            } else {
                toast.error("Login Failed");
            }
        } catch (error) {
            toast.error("Login Failed: " + error.message);
        }
    };

    return (
        <div>
            <div className="w-full max-w-xl mx-auto overflow-hidden bg-teal-500 rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <div className="flex justify-center mx-auto bg-white">
                        <img className="w-auto h-7 " src={logo} alt="" />
                    </div>

                    <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">Welcome Back</h3>

                    <p className="mt-1 text-center text-white dark:text-gray-400">Login or create account</p>

                    <form onSubmit={handleLogin}>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="text"
                                placeholder="Email or Phone Number"
                                aria-label="Email or Phone Number"
                                name="emailOrPhone" // Update name attribute
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="password"
                                placeholder="PIN"
                                aria-label="PIN"
                                name="pin"
                            />
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <a href="#" className="text-sm text-gray-600 dark:text-gray-200 hover:text-gray-500">Forget Password?</a>

                            <button
                                className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-800 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50"
                                type="submit"
                            >
                                Log In
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account? </span>
                    <p className="mx-2 text-sm font-bold text-teal-700 dark:text-teal-400 hover:underline"><Link to="/register">Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
