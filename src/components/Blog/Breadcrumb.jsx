import React from 'react'
import { useLocation, Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Breadcrumb = () => {
    const location = useLocation();
    const pathname = location.pathname;

    if (pathname === "/") return null;

    const pathParts = pathname.split("/").filter(Boolean);

    const crumbs = pathParts.map((part, index) => {
        const path = "/" + pathParts.slice(0, index + 1).join("/");

        const label = part
            .replace(/-/g, " ")
            .replace(/\b\w/g, (c) => c.toUpperCase());

        return { label, path };
    });

    return (
        <nav
            className="
               w-full p-2 bg-gray-100 text-gray-700 rounded-2xl 
                max-sm:w-full max-sm:p-2
                overflow-x-auto
            "
        >
            <ul
                className="
                    flex gap-1 items-center
                    max-sm:gap- max-sm:text-sm
                    whitespace-nowrap
                "
            >
                <li>
                    <Link to="/" className="text-blue-600 hover:underline flex items-center">
                        <FaHome className="w-5 h-5 text-gray-700 max-sm:w-4 max-sm:h-4" />
                    </Link>
                </li>

                {crumbs.map((crumb, index) => (
                    <li key={crumb.path} className="flex items-center">
                        <span className="px-1 text-gray-500">/</span>
                        <Link
                            to={crumb.path}
                            className="text-[#66a038] hover:underline"
                        >
                            {crumb.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Breadcrumb;
