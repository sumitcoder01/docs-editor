import { useEffect, useState } from "react";
import { DocumentMeta } from "../../../interfaces/document";
import { formattedDate } from "../../../utils/FormateDate";
import Logo from '/logo.svg';
import { useNavigate } from "react-router-dom";
import { DocumentCardSkeleton } from "../../loaders/skeletonScreens/DocumentCardSkeleton";
import { UpdateTitleField } from "./UpdateTitleField";
import { DeleteDocumentButton } from "./DeleteDocumentButton";

export interface DocumentCardProps {
  documentData: DocumentMeta;
  deleteDocumentById: (id: string) => void;
  updateDocumentTitle: (id: string, title: string) => void;
}

export const DocumentCard = ({ documentData, deleteDocumentById, updateDocumentTitle }: DocumentCardProps) => {
  const [show, setShow] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [title, setTitle] = useState<string>('');
  const [createdAt, setCreatedAt] = useState<string>('');
  const [updatedAt, setUpdatedAt] = useState<string>('');
  const navigate = useNavigate();

  const toggelShow = () => setShow(prev => !prev);

  useEffect(() => {
    const updateDatesFormate = () => {
      setCreatedAt(formattedDate(documentData.createdAt))
      setUpdatedAt(formattedDate(documentData.updatedAt))
      setTitle(documentData.title)
    }
    updateDatesFormate();
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <div>
      {loading ? <DocumentCardSkeleton /> :
        <div className="border px-1 py-4 md:px-4 w-72 md:w-[40rem] rounded shadow flex items-center justify-between gap-3 md:gap-4 flex-col md:flex-row">
          <div className='flex items-center justify-start gap-3 md:gap-4 flex-col md:flex-row'>
            <img src={Logo} alt="Logo" className='w-10' />
            <div className="flex flex-col">
              {!show ? <span onClick={toggelShow} className="text-lg font-semibold cursor-pointer">{title}</span> : <UpdateTitleField id={documentData._id} title={title} toggelShow={toggelShow} setTitle={setTitle} updateDocumentTitle={updateDocumentTitle} />}
              <span className="text-sm text-gray-500">Created at: {createdAt}</span>
              <span className="text-sm text-gray-500">Last Modified at: {updatedAt}</span>
            </div>
          </div>
          <div className='flex items-center justify-start mr-3 gap-3'>
            <div className='cursor-pointer p-2  text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100' onClick={() => navigate(`/document/${documentData.documentId}`)}>Edit</div>
            <DeleteDocumentButton id={documentData._id} deleteDocumentById={deleteDocumentById} />
          </div>
        </div>
      }
    </div>
  );
};