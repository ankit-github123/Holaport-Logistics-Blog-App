import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import Modal from "../../common/modal/Modal";
import BlogCreate from "../../blog/BlogCreate";

import "./header.css"
export default function Header(props) {
  const { search, setSearch } = props.searchObj
  const { globalData, setGlobalData } = props.glob;
  const [input, setInput] = useState('')
  const [Islogout, setIslogout] = useState(false)
  window.addEventListener("storage", () => {
    setIslogout(!Islogout);
  })
  const handleSearchInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearch(input);
  }
  const handleClick = async () => {
    window.localStorage.clear();
    window.dispatchEvent(new Event("storage"));
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(!open);
  };
  return (
    <div className="header_container primary">

      <div className="auto right_continer">
        <form onSubmit={handleSearchInput}>
          <div className="d-flex"><input value={input} onChange={handleSearchInputChange} className="search_input secondary secondary_text" /><SearchIcon className="search" /></div>
        </form>
        <div className="auto header_button">
          <div onClick={() => setOpen(!open)} className="primary_text post_create_button">Create A Post</div>
          {Boolean(localStorage.getItem("email")) && <button onClick={handleClick} className="logout_button">Logout</button>}
        </div>
      </div>
      <Modal open={open} setOpen={handleClose}>
        <div>
          <BlogCreate open={open} setOpen={handleClose} glob={{ globalData: globalData, setGlobalData: setGlobalData }} />
        </div>
      </Modal>
    </div>
  );
}
