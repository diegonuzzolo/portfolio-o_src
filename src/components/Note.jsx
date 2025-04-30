import { useState } from "react";
import { useEffect } from "react";
import note from '../assets/quaderno.jpeg'
import noteMobile from '../assets/quaderno.png'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};
const Note = () => {
  const isMobile = useIsMobile();
  // Stato per ogni link
 
  


  return (
    
    <div id="note"
      style={{
        right: isMobile ? '7.5vh' : '50vh',
        top: isMobile ? '55vh' : '70vh',
        width: isMobile ? "256px" :"1294px",
        height: isMobile ? "325px" : "947px",
        position: "absolute",
      }}
    >
            <style>{`
        @keyframes slideDown {
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
           @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.5);
          }
          80% {
            opacity: 1;
            transform: scale(1.1);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `
      
      
      }
      
      </style>
     
      
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: "0px",
          gap: "48px",
          width: isMobile ? "256px" :"1294px",

          height: isMobile ? "325px" : "947px",

          alignItems: 'center',
          backgroundColor: "transparent",
          borderRadius: '5px 5px 5px 5px',
          transform: 'translateX(100%)',
          opacity: 0,
          animation: 'slideDown 2s ease-out forwards',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
          backgroundImage: isMobile ? `url(${noteMobile})` : `url(${note})`

        }}
      >
    
      </div>
    </div>
    
  );
};

export default Note;
