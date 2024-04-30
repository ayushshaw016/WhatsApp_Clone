import Image from "next/image";
import profile from "../public/Assets/Images/student_icon.png"
import Card from "../Components/Cards";
import { Chats_card } from "../Components/Cards";
export default function Home() {
  const card_data =[
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]

    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },
    {
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Ayush',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]

    },
  ]
  return (
    <>
    <div className="mt-2 ml-4">
    <Image src={profile} className="w-8 h-8 inline-block rounded-full" />
    <span className="text-green-800 ml-4 text-md">WhatsApp</span>
    </div>
    
<div className="mt-4 bg-white flex flex-row " style={{ height: '91vh' }}>
<div className="1/12 bg-gray-300 " style={{ height: '91vh' }}>
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
</div>
  <div className="w-3/12 border-r-2 border-solid border-black">
    <div className="m-4 ">
      <span className="text-xl font-bold">Chats</span>
     
<p>
  <input placeholder="search or start a new chat" className="border border-solid border-gray-300 w-full border-b-2 mt-4 mx-auto px-2 border-b-green-500"/>
</p>
    </div>
    <div className="overflow-scroll" style={{ height: '75vh' , scrollbarWidth: 'none'}}>
<Card card_data ={card_data}/>
    </div>
 
  </div>
  <div className="w-8/12 mr-0" style={{ height: '91vh' , scrollbarWidth:'none'}}>
<Chats_card card_data = {card_data}/>
  </div>
</div>

    </>
  )
}
