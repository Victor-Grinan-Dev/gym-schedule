import React, { useEffect, useState } from "react";
// import { HashLink } from "react-router-hash-link";
import "@fortawesome/fontawesome-free/css/all.min.css";


/* COMPONENTS */
import Today from "../../components/today/Today";
import getSheetData from "../../service/getSheetData";

const weekdays = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  4: "E",
  5: "F",
  6: "G",
};

const LandingPage = () => {
  const [data, setData] = useState([]);
  const today = new Date().getDay();
  const query = `SELECT ${weekdays[today]}`;
  const sheetID = "1qIwYwmFuzTNTtM_qL5yytH2ZwIDOg4BvXxuAUyP97JM";

  useEffect(() => {   
    getSheetData({
      sheetID: sheetID,
      sheetName: 'Sheet1',
      query: query,
      callback: (data) => {
        setData(data);
      },
    })
  }
  , [])

 
  return (
    <div className='landinpage' id="landingpage">
        <Today weekday={today} stateData={data} />
    </div>
  )
}
export default LandingPage;



