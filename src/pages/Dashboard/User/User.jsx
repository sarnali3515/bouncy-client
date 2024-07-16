import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Auth/AuthProvider";
import sendmoney from '../../../assets/icon/send-money.png'
import cashout from '../../../assets/icon/cash-out.png'
import cashin from '../../../assets/icon/cash-in.png'
import paymenthist from '../../../assets/icon/payment-hist.png'


const User = () => {
    const { user } = useContext(AuthContext);
    const [showBalance, setShowBalance] = useState(false);

    const handleToggleBalance = () => {
        setShowBalance(!showBalance);
    };
    return (
        <div>
            {/* Balance */}
            <div>

            </div>
            <div className="container mx-auto p-4">
                <div className="bg-white text-center shadow-md rounded-lg p-4 mb-4">
                    <h2 className="text-2xl font-semibold mb-8">Welcome, {user.name}</h2>
                    <div className="flex justify-center">
                        <p className="text-gray-700 text-lg font-semibold border py-1 px-5 rounded-lg w-80">
                            Balance:
                            <span> </span>
                            <span onClick={handleToggleBalance} className="cursor-pointer text-teal-500">
                                {showBalance ? `${user.balance} Taka` : 'See Balance'}
                            </span>
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <Link to="/send-money">
                        <div className="border-teal-400 hover:bg-teal-50 border text-teal-600 shadow-md rounded-lg p-4 text-center cursor-pointer  transition">
                            <div className="flex justify-center my-5">
                                <img className="w-16" src={sendmoney} alt="" />
                            </div>
                            <h3 className="text-xl font-semibold">Send Money</h3>
                        </div>
                    </Link>
                    <Link to="/cash-out">
                        <div className="border-teal-400 hover:bg-teal-50 border text-teal-600 shadow-md rounded-lg p-4 text-center cursor-pointer  transition">
                            <div className="flex justify-center my-5">
                                <img className="w-16" src={cashout} alt="" />
                            </div>
                            <h3 className="text-xl font-semibold">Cash Out</h3>
                        </div>
                    </Link>
                    <Link to="/cash-in">
                        <div className="border-teal-400 hover:bg-teal-50 border text-teal-600 shadow-md rounded-lg p-4 text-center cursor-pointer  transition">
                            <div className="flex justify-center my-5">
                                <img className="w-16" src={cashin} alt="" />
                            </div>
                            <h3 className="text-xl font-semibold">Cash In</h3>
                        </div>
                    </Link>
                    <Link to="/transaction-history">
                        <div className="border-teal-400 hover:bg-teal-50 border text-teal-600 shadow-md rounded-lg p-4 text-center cursor-pointer  transition">
                            <div className="flex justify-center my-5">
                                <img className="w-16" src={paymenthist} alt="" />
                            </div>
                            <h3 className="text-xl font-semibold">Transaction History</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default User;