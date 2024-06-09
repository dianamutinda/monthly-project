import honeymoonImg from "../../assets/honeymoon.jpeg"
import familyImg from "../../assets/family.jpeg"
import adventureImg from "../../assets/adventure.jpeg"
import cultureImg from "../../assets/culture.jpeg"
import wildlifeImg from "../../assets/wildlife.jpeg"
import ecotourImg from "../../assets/ecotour.jpeg"
import luxuryImg from "../../assets/luxury.jpeg"
import beachImg from "../../assets/beach.jpeg"
import wellnessImg from "../../assets/wellness.jpeg"
import culinaryImg from "../../assets/culinary.jpeg"
import "./Trip types.css"
const Triptypes = () =>{
    return(
        <section>
            <div className="trip">
                <div className="trip-container">
                    <div className="trip-image">
                        <img src={honeymoonImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>honeymoon</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$130</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={familyImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>Family tours</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$180</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={adventureImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>adventure</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$150</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={cultureImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>cultural tours</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$100</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={wildlifeImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>wildlife safaris</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$140</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={ecotourImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>eco tours</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$160</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={luxuryImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>luxury vacations</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$130</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={beachImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>beach holidays</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$170</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={wellnessImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>wellness retreats</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$120</p>
                        </div>

                </div>

                <div className="trip-container">
                    <div className="trip-image">
                        <img src={culinaryImg} alt="" />
                       
                    </div>
                    <div className="trip-text">
                            <h3>culinary tours</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p className="trip-price">price:$110</p>
                        </div>

                </div>
            </div>
        </section>

    )
}
export default Triptypes;