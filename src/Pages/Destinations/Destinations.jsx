import dubaiImg from "../../assets/dubai.jpeg"
import hellImg from "../../assets/Hells Gate.jpeg"
import coloradoImg from "../../assets/colorado springs.jpeg"
import karuraImg from "../../assets/karura.jpeg"
import menengaiImg from "../../assets/Menengai crater.jpeg"
import mombasaImg from "../../assets/mombasa.jpeg"
import parisImg from "../../assets/paris.jpeg"
import sevenImg from "../../assets/seven falls.jpeg"
import bgImg from "../../assets/bg.jpeg"
import "./Destinations.css"
const Destinations = () =>{
    return(
        <section>
            <div className="destination">
            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={dubaiImg} alt=""  />
                <div className="dest-text">
                    <h2 className="place-name">dubai</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                    </div>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={coloradoImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">colorado springs</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={hellImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">hells gate</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={menengaiImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">Menengai crater</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={mombasaImg} alt=""  />
                <div className="dest-text">
                    <h2 className="place-name">mombasa</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                  </div>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={karuraImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">karura forest</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={parisImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">paris</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={sevenImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">seven falls</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>

            <div className="dest-container">
                <div className="img-wrapper">
                    <img src={bgImg} alt=""  />
                </div>
                <div className="dest-text">
                    <h2 className="place-name">diani</h2>
                    <p>Lorem ipsum,Debitis vero aperiam, magni possimus ut voluptatibus esse unde modi eveniet aliquid.</p>
                    <a href="" className="cta">view more</a>
                    <p className="price">price @ person $200 </p>
                    <p className="price">price group $190</p>
                </div>
            </div>
            </div>
        </section>
    )
}
export default Destinations;