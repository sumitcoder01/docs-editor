import { Navbar } from "../componets/specific/Navbar";
import { ProfileCard } from "../componets/specific/ProfileCard";
import { DocumentList } from "../componets/specific/documents/DocumentList";

const Home = () => {
  return (
    <div className='min-h-screen bg-gray-100 flex overflow-auto'>
      <Navbar />
      <div className="flex flex-col gap-5 mx-2 mt-1">
        <div className="mb-2"><ProfileCard /></div>
        <div className="mb-1"><DocumentList /></div>
      </div>
    </div>
  )
}

export default Home
