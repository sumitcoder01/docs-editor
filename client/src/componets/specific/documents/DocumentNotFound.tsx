import DocumentNotFoundImg from '../../../assets/no-data-found.png';

export const DocumentNotFound =()=>{

    return (
        <div className='md:absolute md:right-1/2 flex gap-2 md:gap-3 flex-col items-center mt-3'>
            <img src={DocumentNotFoundImg} alt="not-found" className='h-24'/>
            <span className="text-gray-700 font-bold font-2xl">No documents found!</span>
        </div>
    )
}