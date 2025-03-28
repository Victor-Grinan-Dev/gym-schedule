import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import "@fortawesome/fontawesome-free/css/all.min.css";

/* COMPONENTS */
import Today from "../../components/today/Today";

const LandingPage = () => {
  const [stateData, setData] = useState();

  const endpoint = import.meta.env.VITE_APP_ENDPOINT
  console.log(endpoint);

  const getData = async () => {
    try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setData(data);
        
    }catch (error) {
      console.log(`${JSON.stringify(error)}`);
    }
  }

  useEffect(() => {
      getData();
      // eslint-disable-next-line
  }, [])

  const today = new Date().getDay();
 
  return (
    <div className='landinpage' id="landingpage">
        <Today weekday={today} stateData={stateData} />
    </div>
  )
}
export default LandingPage;



