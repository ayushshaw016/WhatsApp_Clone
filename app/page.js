import Image from "next/image";
import profile from "../public/Assets/Images/student_icon.png"
import chat_icon from "../public/Assets/Images/chat_icon.png"
import phone_icon from "../public/Assets/Images/phone_icon.png"
import status_icon from "../public/Assets/Images/status_icon.png"
import Card from "../Components/Cards";
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
      name:'Arun',
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
      name:'Abhinandan',
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
      name:'Golu',
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
      name:'Deepak',
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
      name:'Munquab',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Akash',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Harsha',
      text:'Hello what are you doing....',
      time:'16:11',
      chats:[
        'hello',
        'hi',
        'myself'
      ]
    },{
      img:profile,
      name:'Beti',
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
    <div className="my-4"> 
    <Image src={chat_icon} className="w-10 h-10"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={phone_icon} className="w-10 h-10"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={status_icon} className="w-10 h-10"/>
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
  <div className="w-11/12">
<Card card_data ={card_data}/>
  </div>

</div>

    </>
  )
}
