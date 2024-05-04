import { CloseModalButton } from "../specific/CloseModalButton";

export type ConfirmModalProps = {
    type:string;
    title:string;
    description:string;
    handleConfirm: () => void;
    toggleModal: () => void;
}

const ConfirmModal = ({ handleConfirm, toggleModal,title,type,description }: ConfirmModalProps) => {
    return (
        <div
            className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
            onClick={toggleModal}
        >
            <div className="relative p-4 w-full max-w-2xl">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-4 border-b rounded-t">
                        <h3 className="text-xl font-semibold text-gray-900">
                            {title}
                        </h3>
                        <CloseModalButton toggleModal={toggleModal} />
                    </div>
                    <div className="p-4 space-y-4">
                        <p className="text-base leading-relaxed text-gray-500">
                            {description}
                        </p>
                    </div>
                    <div className="flex items-center p-4 border-t border-gray-200 rounded-b">
                        <button
                            onClick={handleConfirm}
                            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                            {type}
                        </button>
                        <button
                            onClick={toggleModal}
                            className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal