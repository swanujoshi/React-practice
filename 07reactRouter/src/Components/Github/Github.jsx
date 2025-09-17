import React, { useEffect, useState } from 'react'

function Github() {
  
    const [data, setData] = useState([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/swanujoshi')
        .then(res => res.json())
        .then(data => {console.log(data)
        setData(data)})
    }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src = {data.avatar_url} alt="github profile" className='w-32 h-32 rounded-full mx-10 mb-10'/>
    </div>
  )
}

export default Github
