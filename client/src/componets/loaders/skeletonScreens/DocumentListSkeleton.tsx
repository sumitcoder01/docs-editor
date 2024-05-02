import { DocumentCardSkeleton } from "./DocumentCardSkeleton";

export const DocumentListSkeleton = () => {
    return (
        <div className="flex flex-col justify-center md:justify-start gap-1 md:gap-2">
            {[...Array(4)].map((_, index) => (
                <DocumentCardSkeleton key={index} />
            ))}
        </div>
    );
};