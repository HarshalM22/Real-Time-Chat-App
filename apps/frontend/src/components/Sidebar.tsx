"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ChatItem } from "./ChatItem";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";


export function Sidebar ()  {
  const [slug,setSlug] = useState("");
  const [roomId,setRoomId] = useState("");
  const router = useRouter() ;

  
  
async function createRoom(){
 const response = await axios.post(`${BACKEND_URL}/api/v1/room`,{
    slug : roomId ,
    adminId : "f4465078-756c-4fec-8277-8edafbef2f0e"
  })
  setRoomId(response.data.roomId)
}




    return (
      <div className="w-72 h-screen ">
        
        <div className="bg-gray-200 rounded-3xl px-2 py-2 mt-4 mx-2 ">
            <input type="text" value={slug} onChange={(e)=>{setSlug(e.target.value)}} placeholder="Room Id..." className="bg-transparent text-gray-900 rounded-3xl px-2 mr-2 " />
            <button className="hover:text-blue-700 hover: " onClick={()=>{
              router.push(`/dashboard/${roomId}`)
              createRoom() ;
            }}>Join{roomId}</button>
        </div>
        
        <ChatItem name="Sarah Johnson"/>
        
      </div>
    );
  };


//  async function getRooms(slug :string){
//     const response =await axios.get(`${BACKEND_URL}/room/${slug}`)
//     return response.data.id ;
//   }