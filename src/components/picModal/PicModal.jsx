import React from 'react';
import PicLoader from '../picLoader/PicLoader';
import { togglePicModal } from '../../app/appSlice';
import { useDispatch, useSelector } from 'react-redux';

const PicModal = () => {
    const pic = useSelector(state => state.picModalCurrentPic);

    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(togglePicModal());
    }

  return (
    <div className='picmodal'>
        <div className="close" onClick={handleClose}>X</div>
        <div className="pic-wrapper">
            <PicLoader pic={pic}/>
        </div>
    </div>
  )
}

export default PicModal;