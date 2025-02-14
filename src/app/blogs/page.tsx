import axios from "axios"
import { title } from "process";

async function getBlogs(){

    const response=await axios.get("https://jsonplaceholder.typicode.com/todos")
    return response.data;
}

async function Blogs(){
    
    const blogs = await getBlogs();
 
    return (
    <div>
       {blogs.map((blog:iTodo) =><Todo title={blog.title} completed={blog.completed}/>)}
    </div>
  )
}

interface iTodo{
  title:string;
  completed:boolean
}

function Todo({title,completed}:iTodo){
    return(
      <div>
        {title} {completed?"done": <div>not done</div>}
      </div>
    )
}

export default Blogs
