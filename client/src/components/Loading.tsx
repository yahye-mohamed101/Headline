import { Loader2 } from 'lucide-react';

export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
            <p className="mt-4 text-gray-600">Loading latest news...</p>
        </div>
    );
};