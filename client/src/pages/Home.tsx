import { Navbar } from "../componets/specific/Navbar";
import { ProfileCard } from "../componets/specific/ProfileCard";
import { DocumentList } from "../componets/specific/documents/DocumentList";

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex overflow-auto'>
      <Navbar />
      <div className="flex flex-col gap-5 mr-2 mt-1 ml-8 sm:ml-5 w-[60%] md:w-auto items-center md:items-start">
        <div className="mb-2"><ProfileCard /></div>
        <div className="mb-1"><DocumentList /></div>
      </div>
    </div>
  )
}

export default Home
