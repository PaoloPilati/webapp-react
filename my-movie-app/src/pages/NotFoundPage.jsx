import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="container py-5 text-center">
            <h1 className="display-4 mb-3">404</h1>
            <h2 className="mb-4">Page not found</h2>
            <p className="mb-4">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link to="/" className="btn btn-primary">
                Go back home
            </Link>
        </div>
    )
}

export default NotFoundPage;