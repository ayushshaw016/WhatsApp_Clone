import Image from "next/image";
import profile from "../public/Assets/Images/student_icon.png"
import Card from "./Cards";
export default function Home() {
  const card_data =[
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'

    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11'

    },
  ]
  return (
    <>
    <div className="mt-2 ml-4">
    <Image src={profile} className="w-8 h-8 inline-block rounded-full" />
    <span className="text-green-800 ml-4 text-md">WhatsApp</span>
    </div>
    
<div className="mt-4 bg-white flex flex-row overflow-hidden">
<div className="1/12 bg-gray-300">
  <div className="flex flex-col ml-2 ">
    <div className="my-4 mx-2 "> 
    <Image src={profile} className="w-8 h-8 "/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={profile} className="w-8 h-8"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={profile} className="w-8 h-8"/>
    </div>
  </div>



  <div className="flex flex-col mt-44 ml-2">
    <div className="my-4 mx-2 "> 
    <Image src={profile} className="w-8 h-8 "/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={profile} className="w-8 h-8"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={profile} className="w-8 h-8"/>
    </div>
  </div>
  <div></div>
</div>
  <div className="w-4/12 border border-solid border-black border-b-0 rounded-t-xl">
    <div className="m-4 ">
      <span className="text-xl font-bold">Chats</span>
     
<p>
  <input placeholder="search or start a new chat" className="border border-solid border-gray-300 w-full border-b-4 mt-4 mx-auto px-2"/>
</p>
    </div>
    <div className="overflow-scroll h-screen">
<Card card_data ={card_data}/>
    </div>
 
  </div>
  <div className="w-7/12 h-full">hi</div>
</div>

    </>
  )
}
