import nakuruImg from "../../assets/nakuru.jpeg";
import ruwenzoriImg from "../../assets/mt-ruwenzori.jpeg";
import tzavoImg from "../../assets/tzavo.jpeg";
import parkImg from "../../assets/National-Park-Kenya.jpeg"
import coastalImg from "../../assets/coastal.jpeg";
import mtkenyaImg from "../../assets/Mt Kenya.jpeg";
const Destination = () => {
  return (
    <section>
      <div className="d-title">
        <h1 className="title">our popular destinations</h1>
      </div>
      <div className="destination-section">
        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={mtkenyaImg} alt="image" />

            <div className="text-container">
              <div className="top-text">
                <h3 className="name">Mt kenya</h3>
                <h3 className="price">2500 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={ruwenzoriImg} alt="lake nakuru image" />
            <div className="text-container">
              <div className="top-text">
                <h3 className="name">mt ruwenzori</h3>
                <h3 className="price">4000 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={nakuruImg} alt="lake nakuru image" />
            <div className="text-container">
              <div className="top-text">
                <h3 className="name">l nakuru</h3>
                <h3 className="price">3000 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={tzavoImg} alt="lake nakuru image" />
            <div className="text-container">
              <div className="top-text">
                <h3 className="name">tsavo park</h3>
                <h3 className="price">2800 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={parkImg} alt="lake nakuru image" />
            <div className="text-container">
              <div className="top-text">
                <h3 className="name">nairobi park</h3>
                <h3 className="price">3500 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>

        <div className="destination-container">
          <div className="destination-image-wrapper">
            <img src={coastalImg} alt="image" />
            <div className="text-container">
              <div className="top-text">
                <h3 className="name">coastal kenya</h3>
                <h3 className="price">5000 @ person</h3>
              </div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam repellendus eius natus facilis hic nostrum numquam
                ipsum assumenda, sapiente doloremque?
              </div>
              <div className="cta">
                <a href="">buy ticket</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Destination;
