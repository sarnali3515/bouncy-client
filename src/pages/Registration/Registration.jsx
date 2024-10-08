
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/icon/bouncy-logo.png';
import toast from "react-hot-toast";
import { useState } from 'react';
import axios from 'axios';


const Registration = () => {
    const [pinError, setPinError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const pin = form.pin.value;
        console.log(name, email, number, pin)

        setPinError("");

        if (pin.length < 5) {
            setPinError("Pin must be exactly 5 characters long.");
            return;
        }
        if (pin.length > 5) {
            setPinError("Pin must be 5 characters.");
            return;
        }

        try {
            const userInfo = {
                name,
                email,
                phoneNumber: number,
                pin,
            };

            const response = await axios.post('http://localhost:5000/register', userInfo);

            if (response.status === 201) {
                console.log(response.data);
                localStorage.setItem('token', response.data.token);
                toast.success("Registration Successful");
                navigate('/');

            } else {
                console.error(response.error);
                toast.error("Registration Failed");
            }
        } catch (error) {
            toast.error("Registration Failed: " + error.message);
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


                    <form onSubmit={handleRegister}>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="text"
                                placeholder="Name"
                                name='name'
                                required
                            />
                        </div>



                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="text"
                                placeholder="Mobile Number"
                                name='number'
                                required
                            />
                        </div>

                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="email"
                                placeholder="Email Address"
                                name='email'
                                required
                            />
                        </div>
                        <div className="w-full mt-4">
                            <input
                                className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-teal-400 dark:focus:border-teal-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-teal-300"
                                type="password"
                                placeholder="5-digit PIN"
                                name="pin"
                                pattern="\d{5}"
                                minLength="5"
                                maxLength="5"
                                required

                            />
                            {pinError && <p className="text-red-500 text-xs mt-1">{pinError}</p>}
                        </div>

                        <div className="flex items-center justify-end mt-4">
                            <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-teal-800 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-50">
                                Register
                            </button>
                        </div>
                    </form>
                </div>

                <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                    <span className="text-sm text-gray-600 dark:text-gray-200">Already have an account? </span>
                    <p href="#" className="mx-2 text-sm font-bold text-teal-700 dark:text-teal-400 hover:underline">
                        <Link to="/">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Registration;
