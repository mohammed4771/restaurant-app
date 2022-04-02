import banner3 from "./assets/banner3.png"
const Contact = () => {

    return (
        <div className="contact">
            <div className="content">
                <div className="contact-banner">  
                </div>

                <div className="contact-details">
                    <h3>Contact Us On:</h3>
                    <div className="main-contact">
                        <div className="email">
                            <h3>E-mail</h3>
                            <p>Business: <a href="#">yourname@company.com</a></p>
                            <p>Support: <a href="#">support@company.com</a></p>
                        </div>
                        <div className="phone-number">
                            <h3>Phone Number</h3>
                            <p>Asiacell: <a>0771-234-5678</a></p>
                            <p>zain: <a>0781-234-5678</a></p> 
                        </div>
                        <div className="social-media">
                            <h3>Social Media</h3>
                            <p>Facebook: <a href="https://www.facebook.com">@al-sultan</a></p>
                            <p>Twitter: <a href="https://www.twitter.com">@al-sultan</a></p>
                            <p>Instagram: <a href="https://www.instagram.com">@al-sultan</a></p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Contact;
