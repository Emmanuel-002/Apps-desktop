import {useState,useEffect} from 'react'

const Blogs=()=>{
    const[blogData,setBlogData]=useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>response.json())
            .then((data)=>{
                setBlogData(data)
            })
        },[])
        return(
            <div>
                <ul>
                    {blogData.map((blog)=>(
                        <li key={blog.id}>{blog.title}</li>
                    ))}
                </ul>
            </div>
        )
}
export default Blogs