import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import AppLink from '../../components/appLink/AppLink';
import PicLoader from '../../components/picLoader/PicLoader';


const Bookings = () => {
  const { pathname } = useLocation();
  const [copied, setCopied] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const copyToClipboard = (copiedText) => {
    navigator.clipboard.writeText(copiedText)
      .catch((err) => console.error("Failed to copy text: ", err));
  };

  const changeIconColor = (item) => {
    setCopied(item)
  }

  const handleClicked = (text, item) => {
    copyToClipboard(text)
    changeIconColor(item)
  }

  return (
    <div className='boobkings' style={{color:"white"}}>

        <div className="boobkings__tabs-bar" >

          <div className="link-wrapper">
              <AppLink caption="Takaisin" linkTo="/"/>
          </div>

        </div>

        <div className="booking-text">
          <h4 style={{color:"white"}}>Ajanvaraus:</h4>
          
        </div>


        <div className="content-wrapper">

          <div className="content-wrapper__column-a">
            <PicLoader pic="paula_medium" style={{objectFit:"cover"}} />
          </div>

          <div className="content-wrapper__column-b">

            <div className="content-item" >
              <p>Työskentelemme varausjärjestelmän parissa, mutta toistaiseksi varaukset voi tehdä sähköpostitse, puhelimitse tai WhatsAppin kautta. Kiitos.</p>
            </div>

            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fas fa-envelope some-icon"/>
                <p>paulaannelica.tattoo@gmail.com</p>
              </div>

              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "email" && "active"}`} onClick={()=>handleClicked("paulaannelica.tattoo@gmail.com", "email")} />
              </div>
            </div>
            
            <div className="content-item" >
              <div className='content-item__head'>              
                <i className="fas fa-phone some-icon"/>
                <span>Puh.</span>
                <p>+358 45 78392909</p>
              </div>

              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "phone" && "active"}`} onClick={()=>handleClicked("+358 45 78392909", "phone")} />
              </div>
            </div>

            <div className="content-item" >
              <div className='content-item__head'> 
                <i className="fab fa-whatsapp some-icon"/>
                <span>Whatsapp</span>
                <p>+358 45 78392909</p>
              </div>
              <div className="copy-icon-wrapper">
                <i className={`fa-regular fa-copy ${copied === "whatsapp" && "active"}`} onClick={()=>handleClicked("+358 45 78392909", "whatsapp")} />
              </div>

            </div>

          </div>

      </div>
      
    </div>
  )
}

export default Bookings;




