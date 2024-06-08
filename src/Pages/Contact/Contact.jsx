import "./Contact.css"
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClock } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
const Contact = () =>{
    return(
        <section>
           <div className="upperpart">
           <div className="info-cards">
                <div className="cards">
                    <p className="icons"><FaPhoneSquareAlt/></p>
                    <div className="cards-text">
                        <h3>Phone number</h3>
                        <p>+25423654789</p>
                    </div>
                </div>

                <div className="cards">
                    <p className="icons"><MdEmail /></p>
                    <div className="cards-text">
                        <h3>email address</h3>
                        <p>zaphtuors@gmail.com</p>
                    </div>
                </div>

                <div className="cards">
                    <p className="icons"><IoMdClock/></p>
                    <div className="cards-text">
                        <h3>office hours</h3>
                        <p>8am to 5pm</p>
                    </div>
                </div>

                <div className="cards">
                    <p className="icons"><MdLocationPin/></p>
                    <div className="cards-text">
                        <h3>our location</h3>
                        <p>lavington</p>
                    </div>
                </div>
                <div className="cards">
                    <a className="icons" href="intagram.com"><FaInstagramSquare/></a>
                    <a className="icons" href="facebook.com"><FaFacebook/></a>
                    <a className="icons" href="linkedin.com"><FaLinkedin/></a>
                    <a className="icons" href="x.com"><FaTwitter/></a>
                    
                </div>
            </div>
            <div className="form">
                <div className="form-title">
                    <h2>send message</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam tempora atque explicabo.</p>
                </div>
                <div className="for">
                    <form action="">
                        <div className="input-box">
                        <input type="text" placeholder="first name" />
                        <input type="text" placeholder="last name"/>
                        <input type="text" placeholder="your email"/>
                        <input type="text" placeholder="mail subject"/>
                        </div>
                        <div className="message">
                            <input type="text" placeholder="your message"/>
                        </div>
                        <button type="button">submit form</button>
                    </form>
                </div>



            </div>

           </div>
            <div className="map">
                <div className="map-text">
                <h1>find us on google maps</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia soluta aliquid molestias reiciendis, id aperiam veritatis. Sit at quis commodi!</p>

                </div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31916.009254802764!2d37.13520060195052!3d-0.7224462533119203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1717763694691!5m2!1sen!2ske" width="600" height="450"></iframe>
            </div>
        </section>
    )
}
export default Contact;