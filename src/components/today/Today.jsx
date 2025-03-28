import React from 'react';

const Today = (data) => {
    const {weekday, stateData} = data;
  return (
    <section className="Today" style={{width:"100%", color:"white"}}>
    <h2>Today</h2>
    {
      stateData && stateData.map((d, i)=>(
        <p key={i} >{d[weekday]}</p>
      ))
    }
  </section>
  )
}

export default Today;