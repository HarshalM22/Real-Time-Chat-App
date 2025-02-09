interface Chatmessageprops{
    content : string
    variant : "incoming" | "outgoing"
}
export function ChatMessage ({content,variant}:Chatmessageprops){
    const variants = {
      incoming: 'bg-gray-100 text-gray-900',
      outgoing: 'bg-blue-600 text-white ml-auto'
    };
  
    return (
      <div className={"rounded-lg p-4 max-w-xs " + variants[variant] }>
        {content}
      </div>
    );
  };
  