import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import "@fortawesome/fontawesome-free/css/all.min.css";

/* COMPONENTS */
import Today from "../../components/today/Today";

const endpoint = process.env.REACT_APP_API_ENDPOINT
const LandingPage = () => {
  const [stateData, setData] = useState();

  const getData = async () => {
    try {
        const res = await fetch(endpoint);
        const data = await res.json();
        console.log(data);
        setData(data);
        
    }catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      getData();
  }, [])

  const today = new Date().getDay();
 
  return (
    <div className='landinpage' id="landingpage">
        <Today weekday={today} stateData={stateData} />
    </div>
  )
}
export default LandingPage;



