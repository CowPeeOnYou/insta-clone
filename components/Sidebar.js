import { useSession, signOut } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();


  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src={session?.user?.image}
        alt=""
        className="w-16 h-16 rounded-full border p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold"> {session?.user?.name}</h2>
        <h3 className="text-sm text-gray-400">{session?.user?.username}</h3>
      </div>
      <button className="text-blue-400 text-sm font-bold" onClick={signOut}>
        Sign out
      </button>
    </div>
  );
}

export default Sidebar;
