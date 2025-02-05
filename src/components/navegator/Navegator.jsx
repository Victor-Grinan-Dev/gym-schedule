import React, { useEffect, useRef } from "react";
import AppLink from '../../components/appLink/AppLink';
import { APPLINKS } from "../../settings/setings";

const Navegator = () => {
      const navBarRef = useRef(null);

    useEffect(() => {
        const navBar = navBarRef.current;
        const originalPosition = navBar.offsetTop;
    
        const handleScroll = () => {
          if (window.scrollY >= originalPosition) {
            navBar.classList.add("sticky");
          } else {
            navBar.classList.remove("sticky");
          }
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <div className="nav-bar" id="nav-bar" ref={navBarRef}>
          {APPLINKS.map((link, idx)=>(
                <div className="link-wraper" key={idx} >
                    <AppLink 
                        caption={link.caption} 
                        linkTo={link?.linksTo}
                        idLink={link.type === "a"}
                    />
                </div>
            ))}
    </div>
  )
}

export default Navegator;