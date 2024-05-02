export const DocumentCardSkeleton = () => {
    return (
        <div className="border p-4 w-96 md:w-[40rem] rounded shadow animate-pulse flex items-center justify-start gap-3 md:gap-4 flex-col md:flex-row">
            <div className='flex items-center justify-start gap-3 md:gap-4 flex-col md:flex-row'>
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
                <div className="flex flex-col">
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                    <div className="h-3 bg-gray-300 rounded w-24 mt-1"></div>
                    <div className="h-3 bg-gray-300 rounded w-28 mt-1"></div>
                </div>
            </div>
            <div className="w-10 h-10 bg-gray-300 rounded cursor-pointer"></div>
        </div>
    );
};