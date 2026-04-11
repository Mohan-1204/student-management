import axios from "axios";
import { useState } from "react";

function AddStudent() {

 const [name,setName]=useState("")
 const [age,setAge]=useState("")
 const [course,setCourse]=useState("")

 const save=()=>{
  axios.post("http://127.0.0.1:8000/api/student/",
  {name,age,course})
 }

 return(
  <>
  <input onChange={(e)=>setName(e.target.value)} />
  <input onChange={(e)=>setAge(e.target.value)} />
  <input onChange={(e)=>setCourse(e.target.value)} />
  <button onClick={save}>Save</button>
  </>
 )
}

export default AddStudent