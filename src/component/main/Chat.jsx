import { FacebookProvider, CustomChat } from "react-facebook";
import { BsChatSquareText } from "react-icons/bs";

const Chat = () => {
  return (
    <>
      <div className="flex justify-end fixed bottom-20 right-10 z-50">
        {/* <FacebookProvider appId="787032759994114" chatSupport>
         <CustomChat pageId="277011318826707" minimized={true}/>
        </FacebookProvider> */}
        <button className="bg-blue-500  z-50 flex items-center text-white px-4 text-[16px] py-1 font-bold rounded">
          <BsChatSquareText className="text-[20px] mr-2" /> Chat{" "}
        </button>
      </div>
    </>
  );
};
export default Chat;
