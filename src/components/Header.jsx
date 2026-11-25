import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const location = useLocation();

    const isActive = (path) => {
        if(path === "/") {
            return location.pathname === "/" || location.pathname.startsWith("/projects");
        }
        return location.pathname.startsWith(path);
    };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header className="sticky top-0 z-50 bg-(--surface) border-b border-(--bordercolor)"> 
            <nav className="container mx-auto px-4 h-16 flex justify-between items-center gap-4">
                {/* Logo / Site Name */}
                <Link
                    to="/"
                    onClick={scrollToTop}
                    className="text-xl font-bold whitespace-nowrap text-(--accent) hover:opacity-80 transition-opacity"
                >
                    Portfolio
                </Link>

                {/* Navigation Links */}
                <div className="flex gap-4 sm:gap-6 whitespace-nowrap">
                    <Link
                        to="/"
                        onClick={scrollToTop}
                        className={`transition-colors ${
                            isActive("/") 
                                ? "text-(--accent) font-semibold" 
                                : "text-(--muted) hover:text-(--text)"
                        }`}
                    >
                        Projects
                    </Link>

                    <Link
                        to="/about"
                        onClick={scrollToTop}
                        className={`transition-colors ${
                            isActive("/about") 
                                ? "text-(--accent) font-semibold" 
                                : "text-(--muted) hover:text-(--text)"
                        }`}
                    >
                        About me
                    </Link>

                    <Link
                        to="/contact"
                        onClick={scrollToTop}
                        className={`transition-colors ${
                            isActive("/contact")
                                ? "text-(--accent) font-semibold"
                                : "text-(--muted) hover:text-(--text)"
                        }`}
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}