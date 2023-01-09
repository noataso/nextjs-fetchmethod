import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";



const Product = () => {
    const router=useRouter();
    const {id}=router.query;
    const [post,setPost]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method:"GET"})
        .then(res=>res.json())
        .then(data=>setPost(data))
    })
    return (
        <div>
            <h1>{post.id}</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}

export default Product;