import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? "text-blue-500" : "text-gray-600";
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="text-xl font-bold text-blue-600">
                        SuperFit
                    </Link>

                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className={`${isActive("/")} hover:text-blue-500 hover:underline transition-colors duration-200`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/track"
                            className={`${isActive("/track")} hover:text-blue-500 hover:underline transition-colors duration-200`}
                        >
                            Track
                        </Link>
                        <Link
                            to="/about"
                            className={`${isActive("/about")} hover:text-blue-500 hover:underline transition-colors duration-200`}
                        >
                            About
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;