import { BarWave } from "react-cssfx-loading";

export const Loader = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-300">
      <BarWave width={40} height={40} />
    </div>
  )
}
