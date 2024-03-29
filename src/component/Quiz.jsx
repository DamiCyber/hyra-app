import React, { useEffect, useState } from 'react'
import axios from 'axios' 

const Quiz = () => {
    const url = " https://the-trivia-api.com/v2/questions"
    const [data, setdata] = useState("")
    useEffect(() => {
      axios.get(url).then((res) => {
        setdata(res.data)
        console.log(res.data)
      })
    }, [])
    
  return (
    <div>
      
    </div>
  )
}

export default Quiz