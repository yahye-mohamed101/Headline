
import { useRouteError } from 'react-router-dom';

export const ErrorPage = () => {
    const error = useRouteError() as Error;

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">Oops!</h1>
                <p className="text-xl text-gray-600 mb-8">
                    Sorry, an unexpected error has occurred.
                </p>
                <p className="text-gray-500">
                    {error?.message || 'Unknown error'}
                </p>
                <a
                    href="/"
                    className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Go back home
                </a>
            </div>
        </div>
    );
};