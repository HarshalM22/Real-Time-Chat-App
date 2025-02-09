import { ChatItem } from "./ChatItem";



export function Sidebar ()  {
    return (
      <div className="w-72 h-screen ">
        
        <div className="bg-gray-200 rounded-3xl px-2 py-2 ">
            <input type="text" placeholder="Search Chats..." className="bg-transparent text-gray-900 rounded-3xl px-2 " />
        </div>
        
        <ChatItem name="Sarah Johnson"/>
        
      </div>
    );
  };