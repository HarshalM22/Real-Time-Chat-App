import { Message } from "./Message";

 

export function ChatContainer  ()  {
    return (
      <div className="flex-1 flex flex-col h-screen">
        <div className="border-b p-4">
          <h2 className="text-xl font-semibold">Sarah Johnson</h2>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4">
          <Message
            content="Hey! How's the project going?"
            timestamp="10:30 AM"
            isUser={false}
          />
          <Message
            content="Making good progress! Will share the updates soon."
            timestamp="10:32 AM"
            isUser={true}
          />
        </div>
        
        <div className="border-t p-4">
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 bg-transparent outline-none"
            />
            <button className="w-8 h-8 flex items-center justify-center bg-blue-500 rounded-full ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };