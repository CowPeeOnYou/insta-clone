import { faker } from "@faker-js/faker";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const {data: session} = useSession()
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, i) => ({
      id: i,
      image: faker.image.avatar(),
      name: faker.name.findName(),
    }));
    setSuggestions(suggestions);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 rounded-md border overflow-x-scroll scrollbar-thumb-black ">
      {session && (<Story img={session.user.image} name={session.user.username}/>)}
      {suggestions.map((profile) => (
        <Story key={profile.id} img={profile.image} name={profile.name} />
      ))}
    </div>
  );
}

export default Stories;
