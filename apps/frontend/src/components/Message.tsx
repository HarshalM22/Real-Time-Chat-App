
interface MessageProps{
    content : string 
    timestamp : string 
    isUser : boolean
}
export function Message ({ content, timestamp, isUser }: MessageProps) {
    return (
      <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-md px-4 py-2 rounded-lg ${isUser ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
          <p>{content}</p>
          <span className="text-xs text-gray-500 mt-1 block">{timestamp}</span>
        </div>
      </div>
    );
  };