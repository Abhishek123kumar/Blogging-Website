import React, { useState,useEffect } from 'react'
import {getDocs,collection, deleteDoc,doc} from 'firebase/firestore'
import {auth, db} from "../firebase-config"
function Home(isAuth) {
  const[postLists,setPostlist]=useState([]);
  const postCollectionRef= collection(db,"posts");
  useEffect(()=>{
    const getPosts=async() =>{
      const data=await getDocs(postCollectionRef);
      setPostlist(data.docs.map((doc)=>({...doc.data(), id:doc.id})));
    };
    getPosts();
  });
  const deletePost=async (id)=>{
    const postDoc=doc(db,"posts",id)
    await deleteDoc(postDoc)
  }
  return (
    <div className='homePage'>
      {postLists.map((post)=>{
        return (<div className='post'>

         <div className="postHeader">
          <div className='title'>
            <h1>{post .title}</h1>
          </div>
          <div className='deletePost'>
            {isAuth && post.author.id ===auth.currentUser.uid && (
            <button onClick={()=>{
              deletePost(post.id)
            }}>&#128465;</button>
            )}
          </div>
            <div className='postTextContainer'>
            <h2>{post.postText}</h2>
            </div>
   
         </div>

        </div>
        )
      })}
      </div>
  )
}

export default Home