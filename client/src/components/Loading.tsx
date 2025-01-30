import { Loader2 } from 'lucide-react';

export const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <Loader2 className="w-12 h-12 animate-spin text-blue-600" />
      <p className="text-lg text-gray-600 dark:text-gray-400 animate-pulse">
        Loading latest news...
      </p>
    </div>
  );
};