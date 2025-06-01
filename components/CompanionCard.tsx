import Image from "next/image"
import { Button } from "./ui/button"
import Link from "next/link"

interface CompanionCardProps {
  id : string , 
  name : string , 
  topic : string , 
  duration : number , 
  subject : string , 
  color : string 
}



const CompanionCard = ({id , name , topic , duration , subject , color } : CompanionCardProps) => {
  return (
    <article className="companion-card" style={{background:color}}>
      <div className="flex items-center justify-between">
        <div className="subject-badge">{subject}</div>
        <Button className="companion-bookmark">
          <Image src={"/icons/bookmark.svg"}  alt='bookmark' width={12.5} height={15}/>
        </Button>
      </div>

      <h2 className="text-2xl font-bold ">{name}</h2>
      <p className="text-sm">{topic}</p>
      <div className="flex items-center gap-2">
        <Image src={"/icons/clock.svg"}  alt='clock' width={13.5} height={13.5}/>
        <p className="text-sm">{duration} mins  duration</p>
      </div>

      <Link href={`/companions/${id}`} className="w-full">
        <button className="btn-primary w-full justify-center"> Launch Session</button>
      </Link>

    </article>
  )
}

export default CompanionCard
