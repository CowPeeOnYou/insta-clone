import {
  HeartIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
  ChatIcon,
  BookmarkIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import Moment from "react-moment";

function PostItem({ id, name, img, caption, userImg }) {
  const { data: session } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "desc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db, id]);

  useEffect(() => {
    onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) => {
      setLikes(snapshot.docs);
    });
  }, [db, id]);

  useEffect(() => {
    setLiked(likes.findIndex((like) => like.id === session?.user?.uid) !== -1);
  }, [likes]);

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  const likeHandler = async (e) => {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.user.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.user.uid), {
        username: session.user.username,
      });
    }
  };

  return (
    <div className="bg-white my-7 border rounded-sm">
      <div className="flex items-center p-5">
        <img
          src={userImg}
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
          alt=""
        />
        <p className="flex-1 font-semibold">{name}</p>
        <DotsHorizontalIcon className="navBtn" />
      </div>
      <img src={img} className="object-cover w-full" alt="" />
      <div className="flex justify-between px-4 py-4">
        <div className="flex space-x-4">
          {liked ? (
            <HeartIconFilled onClick={likeHandler} className="postBtn text-red-500" />
          ) : (
            <HeartIcon onClick={likeHandler} className="postBtn" />
          )}

          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>

      <p className="p-5 truncate">
        {likes.length > 0 && <p className="font-bold mb-1">{likes.length} likes</p>}
        <span className="font-semibold mr-1">{name}</span>
        {caption}
      </p>
      {comments.length > 0 && (
        <ul className="ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin">
          {comments.map((comment) => (
            <li
              key={comment.id}
              id={comment.id}
              className="flex items-center space-x-2 "
            >
              <img
                src={comment.data().userImage}
                alt=""
                className="h-7 rounded-full m-2"
              />
              <p className="text-sm flex-1">{comment.data().comment}</p>
              <Moment fromNow className="pr-5 text-xs">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </li>
          ))}
        </ul>
      )}

      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="postBtn" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment!"
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default PostItem;
