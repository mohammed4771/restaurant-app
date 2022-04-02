import facebook from './assets/svgs/media/facebook.svg'
import twitter from './assets/svgs/media/twitter.svg'
import instagram from './assets/svgs/media/instagram.svg'

const Footer = () => {
    return (
        <footer>
            <div className="media">
                <h3>Contact Us :</h3>
                <div className="media-links">
                    <a href="#"><img src={facebook} alt="" /></a>
                    <a href="#"><img src={twitter} alt="" /></a>
                    <a href="#"><img src={instagram} alt="" /></a>
                </div>
            </div>
            <div className="rights">
                <p>&copy; 2022 All Right Reseved</p>
            </div>
        </footer>
    );
}
 
export default Footer;