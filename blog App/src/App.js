import React,{useState} from "react";
import Header from "./common/header/Header";
import HomePage from "./home/HomePage";
import "./styles.css";
export default function App() {
  const [search, setSearch] = useState('');
  const [globalData, setGlobalData] = useState([]);
  return (
    <div className="">
      <Header glob={{globalData:globalData,setGlobalData:setGlobalData}}  searchObj={{search:search,setSearch:setSearch}}/>
      <HomePage glob={{globalData:globalData,setGlobalData:setGlobalData}} searchObj={{search:search,setSearch:setSearch}} />
    </div>
  );
}
