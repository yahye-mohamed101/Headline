import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

export const ErrorPage = () => {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
      <div className="max-w-lg w-full text-center">
        <div className="mb-8">
          <AlertCircle className="mx-auto h-16 w-16 text-red-500" />
        </div>
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Oops! Something went wrong
        </h1>
        
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          {error?.message || 'An unexpected error occurred. Please try again later.'}
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                     text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 
                     transition-colors duration-200"
          >
            <Home className="w-5 h-5 mr-2" />
            Return Home
          </Link>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            If the problem persists, please contact support
          </p>
        </div>
      </div>
    </div>
  );
};