import { BACKEND_URL } from "@/app/config"
import axios from "axios"

interface ChatItemProps {
    name: string
}
async function getChats(roomId:string){
      const response = await axios.get(`${BACKEND_URL}/chats/${roomId}`);
      return response.data.messages
    }
export function ChatItem ({name}:ChatItemProps){
      return(
        <div className="bg-blue-100 flex p-5 rounded-xl mt-4">
            <div className="bg-blue-600 h-14 w-14 rounded-full">
            </div>
            <div className="px-3 flex items-center text-black text-lg font-medium">
              <h3>{name}</h3>
            </div>
        </div>
      )
};