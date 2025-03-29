import React from 'react';

const Today = (props) => {
    const {stateData} = props;
  return (
    <section className="Today" style={{width:"100%", color:"white"}}>
    <h2>Today</h2>
    {
      stateData && stateData.map((d, i)=>(
        <p key={i} >{d}</p>
      ))
    }
  </section>
  )
}

export default Today;

export async function getServerSideProps() {
  return
}