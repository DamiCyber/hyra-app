import React, { useEffect, useState } from 'react'
// import axios from 'Axios'

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
    <div>Quiz</div>
  )
}

export default Quiz