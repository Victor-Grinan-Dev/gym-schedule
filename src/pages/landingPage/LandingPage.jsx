import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import "@fortawesome/fontawesome-free/css/all.min.css";

/*redux*/
import { useSelector } from "react-redux";

/* COMPONENTS */
import MenuModal from "../../components/menuModal/MenuModal";
import Today from "../../components/today/Today";
import Navegator from "../../components/navegator/Navegator";


const endpoint = process.env.REACT_APP_API_ENDPOINT
const LandingPage = () => {
    const [stateData, setData] = useState();
    const isModal = useSelector(state => state.app.isModal);
    const getData = async () => {
      try {
        const res = await fetch(endpoint);
        const data = await res.json();
        setData(data)
      } catch (error) {
        console.log(error);
      }
    }

  useEffect(() => {
    getData();
  }, [])

  const today = new Date().getDay();
 

  return (
    <div className='landinpage' id="landingpage">
        <Navegator />
        <Today weekday={today} stateData={stateData}/>

        { isModal && <MenuModal />}
    </div>
  )
}
export default LandingPage;



