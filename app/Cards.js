import Image from "next/image"

export default function Card({card_data}){
return (<>
    {card_data.map((datas, index) =>(
        <div key={index} className="ml-3 mt-4 ">
            <span className=" inline-block ml-6">
                <Image src={datas.img} className="w-8 h-8 rounded-full" />
            </span>
            <span className="inline-block ml-6">
                <p className="font-bold my-1">{datas.name}</p>
                <p>{datas.text}</p>
            </span>
            <span className="text-gray-300  text-xs flex float-right mr-3">{datas.time}</span>

        </div>
    ))}
</>)
}
