import { useEffect, useState } from "react";
import { DocumentMeta } from "../../../interfaces/document";
import { formattedDate } from "../../../utils/FormateDate";
import Logo from '/logo.svg';
import { useNavigate } from "react-router-dom";
import { DocumentCardSkeleton } from "../../loaders/skeletonScreens/DocumentCardSkeleton";

export interface DocumentCardProps {
  documentData: DocumentMeta;
}

export const DocumentCard = ({ documentData }: DocumentCardProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [createdAt, setCreatedAt] = useState<string>('');
  const [updatedAt, setUpdatedAt] = useState<string>('');
  const navigate = useNavigate();
  useEffect(() => {
    const updateDatesFormate = () => {
      setCreatedAt(formattedDate(documentData.createdAt))
      setUpdatedAt(formattedDate(documentData.updatedAt))
    }
    updateDatesFormate();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {loading ? <DocumentCardSkeleton/> :
        <div className="border p-4 w-96 md:w-[40rem] rounded shadow flex items-center justify-start gap-3 md:gap-4 flex-col md:flex-row">
          <div className='flex items-center justify-start gap-3 md:gap-4 flex-col md:flex-row'>
            <img src={Logo} alt="Logo" className='w-10' />
            <div className="flex flex-col">
              <span className="text-lg font-semibold">{documentData.title}</span>
              <span className="text-sm text-gray-500">Created at: {createdAt}</span>
              <span className="text-sm text-gray-500">Last Modified at: {updatedAt}</span>
            </div>
          </div>
          <div onClick={() => navigate(`/document/${documentData.documentId}`)}>Edit</div>
        </div>
      }
    </div>
  );
};
