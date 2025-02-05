import React from 'react';
import { toggleIsModal } from '../../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';


const Hamburger = () => {
  const active = useSelector(state=>state.app.isModal);
  const dispatch = useDispatch();

  const handleHamburger = () => {
    dispatch(toggleIsModal());
  }

  return (
    <div className={`hamburger ${active && 'active'}`} onClick={handleHamburger}>
        <div></div>
    </div>
  )
}

export default Hamburger;