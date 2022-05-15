import {
  HeartIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

function PostItem({ name, img, caption }) {
  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={img}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-semibold">{name}</p>
        <DotsHorizontalIcon className="navBtn" />
      </div>
      <img src={img} className="object-cover w-full" alt="" />
      <div className="flex justify-between px-4 py-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

        <p className="p-5 truncate">
            <span className="font-semibold mr-1">{name}</span>
            {caption}
        </p>
        
        <form className="flex items-center p-4">
            <EmojiHappyIcon className="postBtn"/>
            <input type='text' placeholder="Comment!" className="border-none flex-1 focus:ring-0 outline-none"/>
            <button className="font-semibold text-blue-400">Post</button>
        </form>

    </div>
  );
}

export default PostItem;
