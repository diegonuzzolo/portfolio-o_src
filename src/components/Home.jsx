import { useState, useEffect } from "react";
import Header from './Header';
import ProfilePhoto from "./ProfilePhoto";
import ProfilePhotoMobile from "./ProfilePhotoMobile";
import ImageCarousel from "./ImageCarousel";
import ImageCarouselMobile from "./ImageCarouselMobile";
import insta from '../assets/instagrampng.png';
import tiktok from '../assets/tiktokpng.png';
import Note from './Note';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};


const Home = () => {
  const isMobile = useIsMobile();

  
  
  
  return (
    <div>

      <Header/>
      {isMobile ? <ProfilePhotoMobile/> : <ProfilePhoto />}
      <Note/>
      {isMobile ? <ImageCarouselMobile/> : <ImageCarousel/>}

      <form style={{position:"absolute", left:'0vh', bottom:"20vh"}} class="contact-form" action="send_email.php" method="POST">
        <div class="success-message" id="successMessage">Messaggio inviato con successo! 🎉</div>


        <div class="form-group">
            <label for="email">La tua email</label>
            <input type="email" id="email" name="email" required placeholder="esempio@dominio.com"/>
        </div>

        <div class="form-group">
            <label for="subject">Oggetto</label>
            <input type="text" id="subject" name="subject" required placeholder="Es. Collaborazione artistica"/>
        </div>

        <div class="form-group">
            <label for="message">Il tuo messaggio</label>
            <textarea id="message" name="message" required placeholder="Scrivi qui il tuo messaggio..."></textarea>
        </div>

        <button type="submit" class="submit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
            </svg>
            Invia Messaggio
        </button>
    </form>
      
    <footer id="footer" style={{position:"absolute", bottom:"0%", width: '100%'}} class="social-footer">
        <div class="social-container">
            <h3 class="social-title">Seguimi sui social</h3>
            <div  class="social-links">
                
                <a  href="https://instagram.com/ahoripip" class="social-link instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                {/* <i class="fab fa-instagram"></i> */}
                <div style={{
                    backgroundImage: `url(${insta})`,
                    width: "32px",
                    height: "32px",
                }}  aria-label="Instagram">
                </div>

                </a> 
                
                
                {/* <a href="https://facebook.com/" class="social-link facebook" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a> */}
                
                <a href="https://tiktok.com/@ahorimimimiizz" class="social-link tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    {/* <i class="fab fa-tiktok"></i> */}
                    <div style={{
                    backgroundImage: `url(${tiktok})`,
                    width: "32px",
                    height: "32px",
                }}  aria-label="Tiktok">
                </div>
                </a>
            </div>
        </div>
    </footer>
    </div>
  );
};

export default Home;
