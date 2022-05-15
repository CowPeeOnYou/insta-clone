import PostItem from "./PostItem";

const posts = [
  {
    id: "123",
    username: "aeroaero",
    userImg: "https://links.papareact.com/jjm",
    caption: "aero is the bestetyjetyktyek,tuklrl6rl658l57"
  },
  {
    id: "123",
    username: "aeroaero",
    userImg: "https://links.papareact.com/jjm",
    caption: "aero is the best"
  },
];

function Posts() {
  return (
    <div>
    {posts.map((post)=> (
        <PostItem key={posts.id} id={post.id} name={post.username} img={post.userImg} caption={post.caption}/>
    ))}        
    </div>
  );
}

export default Posts;