'use client'

import Image from "next/image"
import student_icon  from "../public/Assets/Images/student_icon.png"
import { useState } from "react"
export default function Card({card_data}){
    const [storedata, setdata] = useState({});
    function getdata(datagetting){
        setdata(datagetting);
    }
return (<>
<div className="flex flex-row">
<div className="border-r-2 border-solid border-black">
<div className="m-4 ">
      <span className="text-xl font-bold">Chats</span>
     
<p>
  <input placeholder="search or start a new chat" className="border border-solid border-gray-300 w-full border-b-2 mt-4 mx-auto px-2 border-b-green-500"/>
</p>
    </div>
    <div className="overflow-scroll" style={{ height: '75vh' , scrollbarWidth: 'none'}}>

    {card_data.map((datas, index) =>(
        <div key={index} className="ml-3 mt-4 hover:bg-gray-100 hover:cursor-pointer" onClick={()=>getdata(datas)}>
            <span className=" inline-block ml-6">
                <Image src={datas.img} className="w-8 h-8 rounded-full" />
            </span>
            <span className="inline-block ml-6">
                <p className="font-bold my-1">{datas.name}</p>
                <p>{datas.text}</p>
            </span>
            <span className="text-gray-500 mt-2 text-xs flex float-right mr-3">{datas.time}</span>

        </div>
    ))}
    </div>
</div>
  <div className="mr-0" style={{ height: '91vh' }}>

    <div className="bg-white">
            <span className="inline-block ">
<Image src={student_icon} className="w-8 h-8 mt-6 ml-4 rounded-full"/>
            </span>
                <span className="inline-block ml-4">

                    <p className=" text-xl font-bold font-sans">
                         {storedata.name}
                    </p>
                    <p className="text-xs text-gray-500">Select for Contact Info</p>
                </span>


                <span className="flex float-right mt-4">
                <span className=" inline-block ml-6 hover:bg-gray-100 px-4">
                <Image src={student_icon} className="w-8 h-8" />
            </span>
            <span className=" inline-block">
                <Image src={student_icon} className="w-8 h-8" />
            </span>
            <span className=" inline-block ml-6">
                <Image src={student_icon}className="w-8 h-8" />
            </span>
                </span>
            </div>
            <div className="bg-gray-100 mx-auto overflow-scroll" style={{height:'71vh', scrollbarWidth:'none'}}>
{/* {storedata.chats.map((chatsdata, index) =>{
    {chatsdata}
})} */}
            </div>
            <div className="flex align-middle">
                <span className="inline-block ml-4">
                    <Image src={student_icon} className="h-8 w-8 mt-2 "/>
                </span>

                <span className="inline-block ml-8">
                    <Image src={student_icon} className="h-8 w-8 mt-2 "/>
                </span>
                <span className="inline-block ml-4">
                <textarea placeholder="Type a message" className="focus:border-0 focus:outline-0 overflow-x-scroll resize-none mt-3 " style={{width:'50vw', scrollbarWidth:'none'}}/>
                </span>
                <span className="inline-block ml-8">
                    <Image src={student_icon} className="h-8 w-8 mt-2 "/>
                </span>
            </div>
            </div>
</div>
</>)
}
// const Chats_card = () => {
//     return (
//         <>
           
//         </>
//     )
// }


// export {Chats_card};