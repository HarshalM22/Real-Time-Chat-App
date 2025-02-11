import { ChatContainer } from "@/components/ChatContainer";
import { Redirect } from "@/components/Redirect";
import { Sidebar } from "@/components/Sidebar";
import { getServerSession } from "next-auth";

export default async function dashboard({params}:any){

  const session = await getServerSession() ;
  
  if(!session?.user){
    return <Redirect to="/"/>
  }
    return (
        <div className="flex justify-center h-screen w-screen " >
        <div className=" h-4/5 w-4/5 flex justify-center rounded-md">
          <Sidebar />
          <ChatContainer />
        </div>
        </div>
      );
}