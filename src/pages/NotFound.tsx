import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 rounded-full p-4">
            <AlertCircle className="h-12 w-12 text-red-600" />
          </div>
        </div>

        {/* Error Code */}
        <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>

        {/* Error Message */}
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>

        {/* Description */}
        <p className="text-gray-600 mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center bg-blue-600 md:hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 gap-2"
        >
          <Home className="h-5 w-5" />
          Go Home
        </Link>

        {/* Additional Help Text */}
        <p className="text-sm text-gray-500 mt-6">
          If you think this is a mistake, please{' '}
          <Link to="/contact" className="text-blue-600 md:hover:text-blue-700 font-medium">
            contact us
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFound;
