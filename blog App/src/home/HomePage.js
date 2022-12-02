import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/card/CardContainer";
import "./home.css";
export default function HomePage(props) {
  const { search, setSearch } = props.searchObj
  const { globalData, setGlobalData } = props.glob;
  const [loading, setLoading] = useState(false);
  // const [response, setResponse] = useState([]);
  useEffect(() => {
    const movieResponse = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      setGlobalData(res?.data.slice(50));
      setLoading(false);
    }
    movieResponse()

  }, [])
  useEffect(() => {
    if(Boolean(search))
    setGlobalData(globalData.filter((item) => item.title.toLowerCase().includes(search)))
  }, [search])
  const renderCard = () => {
    return globalData.map((item, index) => {
      return <div className="col-lg-3 primary home_card_container"><Card glob={{ globalData: globalData, setGlobalData: setGlobalData }} item={item} /></div>;
    })
  }
  return (
    <div className="home_container secondary" style={!globalData ? { height: "100vh" } : null}>
      <div className="row auto home_card_inner">
        {globalData && renderCard()}
      </div>
    </div>
  );
}
