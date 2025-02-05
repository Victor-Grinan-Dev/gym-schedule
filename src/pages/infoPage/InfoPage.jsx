import AppLink from '../../components/appLink/AppLink';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const InfoPage = () => {
  const [tab, setTab] = useState('ennen')
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const fullTitle = {
    ennen:"Ennen tatuointia",
    hoito:"Hoito- ohjeet",
    rajoitukset:"Rajoitukset",
    saapuminen:"Saapuminen Studiolle",
    varaus:"Ajan varaus",
    hinnasto:"Hinnasto",
  }

  const handleTabs = (tab) => {
    setTab(tab);
  };

  return (
    <div className='info-page' style={{color:"white"}}>
            
            <div className='info-page-wraper'>
            
              <div className="side-bar">
              
                <div className="links-wrapper">

                  <div className="link-wrapper" id='back'>
                    <AppLink caption="Takaisin" linkTo="/"/>
                  </div>

                  <div className="link-wrapper" onClick={()=>handleTabs('ennen')}>
                    <AppLink caption="Ennen tatuointia" active={tab==='ennen'}/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('hoito')}>
                    <AppLink caption="Hoito- ohjeet" active={tab==='hoito'}/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('saapuminen')}>
                    <AppLink caption="Saapuminen Studiolle" active={tab==='saapuminen'}/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('varaus')}>
                    <AppLink caption="Ajan varaus" active={tab==='varaus'}/>
                  </div>
                  <div className="link-wrapper" onClick={()=>handleTabs('hinnasto')}>
                    <AppLink caption="Hinnasto" active={tab==='hinnasto'}/>
                  </div>
                </div>
              </div>

            </div>

            <div className="info-wrapper">
              <h4>{fullTitle[tab]}</h4>
              <br />
              {tab === 'ennen' &&
                <div className="info-container">
                  <div className="text-container">
                    <ul>
                        
                        <li><p>Ihoa on suositeltavaa rasvata vähintään viikon ajan ennen tatuointia.</p></li>
                        <br />
                        <li><p>Iho on suositeltavaa kuoria viikon aikana 2-3 kertaa ennen tatuointiin tuloa. </p></li>
                        <br />
                        <li><p>Nuku ja syö hyvin ennen tatuointia. Ota eväitä mukaan pitkään sessioon, studiolta löytyy jääkaappi, mikro ja kahvia on tarjolla. Vieressä on kauppa josta voi tarvittaessa hakea lisää syötävää.</p></li>
                        <br />
                        <li><p>Vältä alkoholia. Päihtyneenä tai krapulaisena ei tatuointiin kannata tulla.</p></li>
                        <br />
                        <li><p>Tatuoitavan alueen kova kuntosalitreeni samana aamuna tai edellisenä päivänä voi tehdä tatuoimisen ottamisesta kipeämpää.</p></li>
                        <br />
                        <li><p>Varustaudu mukavilla ja sopivalla vaatetuksella. Esim olkavarren tatuointiin hihaton paita jne. Vaatteet saattavat myös sotkeutua, joten ethän laita vaatteita joiden et toivo sotkeutuvan.</p></li>
                        <br />
                        <li><p>Tulethan tatuointiin terveenä.</p></li>
                        <br />
                        <li><p>Jotkin lääkitykset (esim. verenohennuslääkeet) tai muut terveyteen liittyvät asiat, esim tulevat leikkaukset jne, on hyvä varmistaa lääkäriltäsi onko tautuoiminen kannattavaa tässä kohtaa.</p></li>
                        <br />
                        <li><p>Tatuointi on ikuinen ja tulee elämään jonkin verran ihon mukana ajan kuluessa. Hyvin ja oikein tehdyt tatuoinnit kestävät aikaa todella hyvin ja tähän vaikuttavat myös tatuoinnin tyyli, paikka ja toteutustapa, unohtamatta jälkihoitoa jolla on myös iso merkitys. Tatuointeja ei tehdä alle 18-vuotiaille.</p></li>
                        <br />
                        <li><p>Tatuointeja ei tehdä alle 18-vuotiaille.</p></li>
                        <br />
                        <li><p>Tatuoinnilla on 6kk takuu. Jos hoito-ohjeita on noudatettu, tatuointi paranee hyvin ja lopputulos on myös parempi. Jos jostain syystä jossain kohtaa väriä ei ole jäänyt tarpeeksi jne niin tämä korjataan ilman kuluja. Muissa tapauksissa korjauksesta veloitetaan normaali hinta.</p></li>
                        <br />
                        <li><p>Tarkkaa hintaa on mahdoton sanoa heti alkuun ja hinta-arvio on aina arvio joka tarkentuu lopullisen suunnitelman ja toteutuksen mukaan.</p></li>
                        <br />
                        <li><p>Suunnittelu ja varausmaksu on 100e jonka maksettua varaus on sitova ja suunnittelut tapahtuvat vasta maksun jälkeen. Varausmaksu hyvitetään tatuoinnin loppusummasta.  Jos idea muuttuu kuvan suunnittelun aikana/jälkeen, tästä otetaan uusi 100-150e  suunittelumaksu. Jos sairastut, voi aikaa siirtää kaksi kertaa samalla varausmaksulla jonka jälkeen otetaan uusi varausmaksu.</p></li>
                        <br />
                        <li><p>Konsultaatio on maksuton ja se ei sido ottamaan vielä kuvaa. Siinä käydään ideaa tarkemmin läpi ja kysellään kaikenlaisia tarkentavia kysymyksiä jne.</p></li>
                        <br />
                        <li><p>Tatuointeja ei tehdä alle 18- vuotiaille.</p></li>
                        <br />
                        <li><p>Tulethan tatuoitavaksi vain terveenä.</p></li>
                    </ul>
                  </div>
                </div>
              }


              {tab === 'hoito' &&
                <div className="info-container">
                  <div className="text-container">
                    <ul>
                        
                        <li><p>Tatuoinnin jälkeen iho suojataan kelmulla tai haavakalvolla. Kelmu otetaan pois 2-3 tunnin kuluttua ja kalvo poistetaan 3-4 päivän kuluttua.</p></li>
                        <br />
                        <li><p>Haavakalvo on hengittävä ja vedenkestävä joten sen kanssa voi käydä suihkussa huoletta. Poista kalvo 3-4 päivän päästä varovasti veden alla. Älä riuhtaise! Tämä saattaa aiheuttaa iholle vaurioita ja pahimmassa tapauksessa rikkoa ihoa. Pese varovasti ja taputtele iho kuivaksi talouspaperilla tai ilma kuivaten. Anna ihon hengittää noin 15 min jonka jälkeen rasvaa alue ohuesti.</p></li>
                        <br />
                        <li><p>Kelmun poistossa toimi samoin kuin yllä</p></li>
                        <br />
                        <li><p>Voit suojata tatuoinnin ensimmäisen yön ajaksi kelmulla, mutta parhaiten iho paranee kun saa mahdollisimman paljon ilmaa, ja kelmu ei hengitä. Tästä syystä myös kelmua ei tulisi pitää ensimmäisen päivän jälkeen.</p></li>
                        <br />
                        <li><p>Muista pestä aina kätesi ennen kuin kosket tatuointiin.</p></li>
                        <br />
                        <li><p>Ensimmäiset kaksi viikkoa pese ja rasvaa tatuointia ohuesti 2-3 krt/ pvä.  Tai tarvittaessa voi rasvata useammin jos iho tuntuu kovin kireältä.</p></li>
                        <br />
                        <li><p>Halutessasi voit suojata tatuointia sideharsolla ja laittaa alle hyvin rasvaa esim töiden takia.</p></li>
                        <br />
                        <li><p>Vältä kireitä vaatteita tatuoinnin päällä.</p></li>
                        <br />
                        <li><p>Käytä tatuoijasi suosittelemaa rasvaa tai esim Bepanthen tai Bevita-R.</p></li>
                        <br />
                        <li><p>Älä puhdista tatuointia Desinfiointiaineilla.</p></li>
                        <br />
                        <li><p>Tatuointi on arka ja voi olla turvonnut ja punoittava ensimmäisten päivien aikana. Samoin kuume tai kipeä olo ovat normaaleja varsinkin pidemmän session jälkeen. Voit ottaa särkylääkettä tarvittaessa.</p></li>
                        <br />
                        <li><p>Noin viikon kuluttua tatuoinnista alkaa irtoamaan kuollutta ihoa ja alta paljastuu uusiutunut iho joka saattaa näyttää tässä vaiheessa vielä haalealta mutta ajan kanssa palautuu normaaliin väriin.</p></li>
                        <br />
                        <li><p>Älä revi irtoavaa ihoa. Tatuointia voi suihkussa kevyesti hieroa jolloin irtoava iho lähtee helpommin pois.</p></li>
                        <br />
                        <li><p>Jos iho kutisee älä raavi. Kevyt läpsyttely auttaa.</p></li>
                        <br />
                        <li><p>Älä päästä lemmikkiäsi nuolemaan tatuointia.</p></li>
                        <br />
                        <li><p>Jos paranemisessa ilmenee ongelmia ja tatuointi ei ala paranemaan vaan alkaa  kipeytymään ja punoittamaan niin ole yhteydessä tatuoijaasi. </p></li>
                        <br />
                        <li><p>Älä epäröi kysyä tatuoijaltasi jos mieltäsi askarruttaa jokin asia.</p></li>
                    </ul>
                    <br />
                    <h5>Huomioitavaa paranemisen aikana!</h5>
                    <h5>Vältä näitä:</h5>
                    <br />
                    <ul>
                      <li><p>Hiki / Rankka treeni 2 viikkoa</p></li>
                      <li><p>Kuntosali 1 viikko</p></li>
                      <li><p>Sauna 2 viikkoa</p></li>
                      <li><p>Uiminen 4 viikkoa</p></li>
                      <li><p>Aurinko ja solarium 4 viikkoa. Jos joudut olemaan auringossa, suojaa tatuointi vaatteilla ja tatuoinnin parannuttuakin käytä suojakerroin 50. Tatuoitu iho palaa herkästi.</p></li>
                    </ul>
                  </div>
                </div>
              }

              {tab === 'saapuminen' &&
                  <div className="info-container">
                    <div className="text-container">
                      <p className="subject">Studio sijaitsee aivan Linnanmäen kupeessa Alppilassa.</p>
                      <ul>
                        <br />
                        <li><p>Raitiovaunut 3 ja 4 pysähtyy suoraan studion eteen. Pysäkki on ”Alppila”.</p></li>
                        <br />
                        <li><p>Sturenkadulta kulkee useita raitiovaunuja ja busseja ja siitä kävelee pari minuuttia studiolle.</p></li>
                        <br />
                        <li><p>Pasilasta ja rautatieasemalta matkaa on molemmista noin 2km ja bussi nro 23 tulee näistä suoraan studiolle</p></li>
                        <br />
                        <li><p>Autolle pysäköintipaikkoja on paljon kadun varsilla ja on ilmaista la-su, muina aikoina maksullista. Linnanmäen parkkialue on hiukan kalliimpi kuin kadun varret.</p></li>
                      </ul>
                    </div>
                  </div>
              }

              {tab === 'varaus' &&
                  <div className="info-container">
                      <div className="text-container">
                        <ul>
                            <li><p>Kerro viestiin oma nimi ja paikkakunta.</p></li>
                            <br />
                            <li><p>Kerro  tatuointi idean lisäksi mihin ja millä tyylillä kuvan haluaisit toteutettavan. Liitä muutamia referenssi kuva mukaan. En kuitenkaan kopioi suoraan toisten tekemiä tatuointeja. Logot ym. ovat asia erikseen</p></li>
                            <br />
                            <li><p>Jos alueella on muita tatuointeja tai haluat peittokuvaa, ota alueesta kuva ja kerro kumpi puoli esim kädestä on kyseessä.</p></li>
                            <br />
                            <li><p>Joskus varattu kellonaika saattaa tatuointi päivänä venyä syystä tai toisesta joten tähän on hyvä varautua.</p></li>
                          </ul>                    
                      </div>
                  </div>
              }

              {tab === 'hinnasto' &&
                  <div className="info-container">
  
                      <div className="text-container">

                        <p className="subject">
                          Tatuoinnit:
                        </p>
                        <ul>
                              <li><p>100e/h</p></li> 
                              <li><p>Walk- In kuvat alkaen 60e</p></li>
                              <li><p>koko päivä 500-700e</p></li>
                              <li><p>Varausmaksu 50-100e</p></li>
                        </ul>
                        <br />
                        <p className="subject">Kestopigmentoinnit:</p>
                        <ul>
                          <li><p>150-250e</p></li>
                          <li><p>Varausmaksu 50-100e</p></li>
                        </ul>
                        <br />
                        <p className="subject">Maksutavat:</p>
                        <ul>
                          <li><p>Ensisijaisena käteinen</p></li>
                          <li><p>MobilePay</p></li>
                        </ul>
                    </div>
                </div>
              }
            </div>

    </div>
  )
}

export default InfoPage;