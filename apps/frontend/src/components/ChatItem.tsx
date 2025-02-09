interface ChatItemProps {
    name: string
}
    
export function ChatItem ({name}:ChatItemProps){
      return(
        <div className="bg-blue-100 flex p-5 rounded-xl">
            <div className="bg-blue-600 h-14 w-14 rounded-full">
            </div>
            <div className="px-3 flex items-center text-black text-lg font-medium">
              <h3>{name}</h3>
            </div>
        </div>
      )
};