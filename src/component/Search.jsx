import React, { useState } from 'react'

const Search = () => {
  const [data, setdata] = useState([
    {
      Cname: "adedamola",
      skincolor: "black",
      height:"4.7ft",
      weight:"60kg",
    },
    {
      Cname: "tola",
      skincolor: "black",
      height:"3.8ft",
      weight:"70kg",
    },
    {
      Cname: "kemi",
      skincolor: "black",
      height:"4.9ft",
      weight:"75kg",
    },
    {
      Cname: "josh",
      skincolor: "light",
      height:"4.0ft",
      weight:"50kg",
    },
  ])
const [search, setSearch] = useState("")
const [eachdata, seteachdata] = useState("")
const searchinp=()=>{
  // console.log(search)
  const newdata=data.filter((item)=>{
    return item.Cname.toLowerCase().includes(search.toLowerCase())
  })
  seteachdata(newdata)
  console.log(eachdata);

}

const [imgname, setimgname] = useState("")
const uploadimg=(e)=>{
  const file = e.target.files[0]
  console.log(file)
  if(file){
    const reader= new FileReader()
    reader.onload=(event)=>{
      setimgname(event.target.result)
    }
    reader.readAsDataURL(file)
    console.log(imgname);
  }
}
  return (
    <div>
      <img src={imgname} alt="" />
      <input type="search" onChange={(e)=>{setSearch(e.target.value)}} onInput={searchinp}/>
      <input type="file" onChange={uploadimg} />
    </div>
  )
}

export default Search