import React from 'react';

import test1 from '../../assets/images/Black&Grey/pic001.jpg';
import test2 from '../../assets/images/Black&Grey/pic002.jpg';
import test3 from '../../assets/images/Black&Grey/pic003.jpg';
import test4 from '../../assets/images/Black&Grey/pic004.jpg';
import test5 from '../../assets/images/Black&Grey/pic005.jpg';
import test6 from '../../assets/images/Black&Grey/pic006.jpg';
import test7 from '../../assets/images/Black&Grey/pic007.jpg';
import test8 from '../../assets/images/Black&Grey/pic008.jpg';

import AppLink from '../appLink/AppLink';

const InfiniteCarrusel = () => {
  return (
    <section className='portfolio homepage-section homepage-section-dark' id='porfolio'>
        <div className="carrusel wrapper to-left" >
            <div className='carrusel-item item1'>
                <img src={test1} alt="tattoo" />
            </div>
            <div className='carrusel-item item2'>
                <img src={test2} alt="tattoo" /> 
            </div>
            <div className='carrusel-item item3'>
                <img src={test3} alt="tattoo" />
            </div>
            <div className='carrusel-item item4'>
                <img src={test4} alt="tattoo" />
            </div>
            <div className='carrusel-item item5'>
                <img src={test5} alt="tattoo" />
            </div>
            <div className='carrusel-item item6'>
                <img src={test6} alt="tattoo" />
            </div>
            <div className='carrusel-item item7'>
                <img src={test7} alt="tattoo" />
            </div>
            <div className='carrusel-item item8'>
                <img src={test8} alt="tattoo" />
            </div>
        </div>


        <div className='app-link-container'>
            <AppLink caption="katso Lisää kuvia Galleriasta" linkTo="/gallery"/>
        </div>

        <div className="my-style">
            <h1>Tyylini:</h1>
            <p>
            Tatuoinneissa näkyy pääsääntöisesti mustaharmaa realismi mutta värikuvat ovat yhtä lähellä sydäntä, samoin kuin pienemmät sirot kuvatkin. Kannattaa aina kysyä jos jokin muunlainen haluamasi aihe tai tyyli olisi mahdollista toteuttaa, Paula on avoin kaikenlaisille ideoille.</p>
        </div>
  </section>
  )
}

export default InfiniteCarrusel;