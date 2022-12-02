import React, { useState } from 'react'
import { signInwithGoogle } from '../services/firebase';
import "./blog.css";
function BlogCreate(props) {
  const { globalData, setGlobalData } = props.glob;
  const { cardItem } = props
  const [isChange, setIsChange] = React.useState(false);
  const [bTitle, setBTitle] = useState(cardItem ? cardItem.title : '');
  const [description, setDescription] = useState(cardItem ? cardItem.body : '')
  window.addEventListener('storage', () => {
    setIsChange(!isChange);
  })
  const signInSection = () => {

    return <button type="button" onClick={signInwithGoogle} class="login-with-google-btn" >
      Sign in with Google
    </button>
  }
  const handleClick = () => {
    if (cardItem) {
      const temp = globalData.filter((item) => item.id !== cardItem.id);
      setGlobalData([{ id: cardItem.id, title: bTitle, body: description }, ...temp])
    }
    else setGlobalData([{ id: 100 + globalData.length, title: bTitle, body: description }, ...globalData])
    props.setOpen()
  }
  const blogSection = () => {
    return <div className='blog_container'>
      <h3 className=''>{`Posting as `}<span style={{ fontStyle: "italic", color: "greenyellow" }}>{`${localStorage.getItem("name")}`}</span></h3>
      <div>
        <label for="title">Title</label>
        <input onChange={(e) => setBTitle(e.target.value)} value={bTitle} style={{ width: "100%" }} className="search_input secondary secondary_text" />
        <label for="desc">Description</label>
        <textarea rows={5} onChange={(e) => setDescription(e.target.value)} value={description} style={{ width: "100%" }} className="search_input secondary secondary_text" />
      </div>
      <button onClick={handleClick} className='blog_submit'>Post</button>
    </div>
  }
  const renderSections = () => {
    if (!Boolean(localStorage.getItem("email")))
      return signInSection();
    return blogSection();
  }
  return renderSections();
}

export default BlogCreate