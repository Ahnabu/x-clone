import Feed from "@/components/Feed"
import Share from "@/components/Share"
import Link from "next/link"

const Homepage = () => {
  return (
    <div className=''>
      <div className="flex justify-around text-textGray font-bold border-b-[1px] border-borderGray">
        <Link href="/" className="pb-3 flex items-center border-b-4 border-iconBlue "> For you</Link>
        <Link href="/" className="pb-3 flex items-center "> Following</Link>
      </div>
      <Feed />
      <Share />
    </div>
  )
}

export default Homepage