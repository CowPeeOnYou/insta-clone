import{useState, useEffect} from 'react'
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([])


  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      id: i,
      image: faker.image.avatar(),
      name: faker.name.findName(),
      location: faker.word.adjective()
    }));
    setSuggestions(suggestions);
  }, []);

  return (
      <div className='ml-10 mt-4'>
        <div className='flex justify-between text-sm mb-5'>
          <h3 className='text-sm font-bold text-gray-400'>Suggestions for you</h3>
          <button className='text-slate-600 font-semibold'>See All</button>
        </div>
        {
          suggestions.map(profile => (
            <li key={profile.id} className='flex items-center justify-between mt-3'>
              <img src={profile.image} alt="" className='w-10 h-10 rounded-full border p-[2px'/>
              <div className='flex-1 ml-4'>
                <h2 className='font-semibold text-sm'>{profile.name}</h2>
                <h3 className='font-semibold text-xs text-gray-400'>{profile.location}</h3>
              </div>
              <button className='text-blue-400 text-sm font-semibold'>Follow</button>
            </li>
          ))
        }
      </div>
  )
}

export default Suggestions