import React, { useState } from 'react';
import { setPicModal, togglePicModal } from '../../app/appSlice';
import pic001 from "";
import { useDispatch, useSelector } from 'react-redux';

const pictures = {
    pic001:pic001,
}

export const collection1 = [
  'pic001',
];

export const collections = [
  'collection1',
];

const PicLoader = (props) => {
    const {pic, xtraStyle, extraClass, idx} = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const dispatch = useDispatch();
    const modalPic = useSelector(state=>state.app.picModalCurrentPic);
    const isPicModal = useSelector(state=>state.app.isPicModal);

    const handleImgPopUp = () => {
      dispatch(setPicModal(pic));
      dispatch(togglePicModal());
    }

  return (
    <>
      {!isLoaded && (
        <img
          className={extraClass}
          src={pictures[pic? pic: modalPic]}
          alt="picLoader object"
          key={idx}
          style={{...xtraStyle, filter: 'blur(10px)',transition: 'opacity 0.3s'}}
        />
      )}
      <img
        className={extraClass}
        src={pictures[pic? pic: modalPic]}
        alt="picLoader object"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        style={{ ...xtraStyle,
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
        onClick={!isPicModal ? handleImgPopUp : null }
      />
    </>
  )
}

export default PicLoader;