import { ChatContainer } from "@/components/ChatContainer";
import { Sidebar } from "@/components/Sidebar";

export default function dashboard(){

    return (
        <div className="flex justify-center items-center h-screen w-screen " >
        <div className=" bg-gray-100 h-4/5 w-4/5 flex justify-center rounded-md">
          <Sidebar />
          <ChatContainer />
        </div>
        </div>
      );
}