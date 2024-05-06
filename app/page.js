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
      text:'Here shaw itself',
      time:'16:11',
      chats:[
        'hello',
        'How may i help you?',
      ]
    },
    {
      img:profile,
      name:'Arun',
      text:'kya hal hai',
      time:'16:11',
      chats:[
        'hello Brother',
        'kya hal hai',
        
      ]

    },
    {
      img:profile,
      name:'Abhinandan',
      text:'kya beta kya kr rha hai',
      time:'16:11',
      chats:[
        'kya be',
        'bnaliya project',
        'jaldi kro'
      ]
    },
    {
      img:profile,
      name:'Golu',
      text:'okkk<<',
      time:'16:11',
      chats:[
        'kya golu',
        'kya haal chal',
        'tab kab hai program'
      ]
    },
    {
      img:profile,
      name:'Deepak',
      text:'hnn jaldi',
      time:'16:11',
      chats:[
        'kha hai deepak bhai',
        'jaldi aao',
        'lafda hogya hai'
      ]
    },
    {
      img:profile,
      name:'Munquab',
      text:'bilkul',
      time:'16:11',
      chats:[
        'kya janab',
        'thoda 12th ka fake result chahiye tha',
        'Bihar board ka'
      ]
    },{
      img:profile,
      name:'Akash',
      text:'jaldi aao',
      time:'16:11',
      chats:[
        'kitne baje jana hai ajj bro',
        'okk',
        'free hoke batana'
      ]
    },{
      img:profile,
      name:'Harsha',
      text:'kuch khayega kya',
      time:'16:11',
      chats:[
        'Dehydrate hogya kya',
        'cold drink chaiye',
        'kidar h bro tum'
      ]
    },{
      img:profile,
      name:'Beti',
      text:'abb me kya kru',
      time:'16:11',
      chats:[
        'parshan hu zindagi s mein',
        'ruk ata hoo',
        'hmm'
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
    <div className="my-4 mx-2"> 
    <Image src={chat_icon} className="w-6 h-6"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={phone_icon} className="w-6 h-6"/>
    </div>
    <div className="my-4 mx-2"> 
    <Image src={status_icon} className="w-6 h-6"/>
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
