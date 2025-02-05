import React from 'react';
import AppLink from '../../components/appLink/Applink';

const NotFound = () => {
  return (
    <div className='not-found'>
      <div className="link-wrapper">
        <AppLink linkTo="/" caption="Takaisin" />
      </div>
      <div className="content">
        <p>Oh no... you just broke the Internet!!!</p>
      </div>
    </div>
  )
}

export default NotFound;