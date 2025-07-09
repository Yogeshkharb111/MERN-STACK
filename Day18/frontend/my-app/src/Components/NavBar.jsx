import { Link } from "react-router";

const NavBar = () => {
    return (
        <div className="py-4 px-6 flex justify-between items-center bg-emerald-50 shadow-md">
            <div className="font-bold text-2xl text-emerald-600">
                Shopping App
            </div>

            <div className="flex gap-2">
                <input
                    placeholder="Search products..."
                    className="border border-gray-300 py-1 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-400"
                />
                <button className="border border-emerald-500 py-1 px-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition-colors duration-200">
                    Search
                </button>
            </div>

            <div className="flex gap-4">
                <Link
                    to="/profile"
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                    Profile
                </Link>
                <Link
                    to="/signup"
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200"
                >
                    Sign Up
                </Link>
            </div>
        </div>
    );
};

export { NavBar };
