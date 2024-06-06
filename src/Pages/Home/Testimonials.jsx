import ruthImg from "../../assets/ruth.jpg";
const Testimonials = () => {
  return (
    <section>
      <div className="test-title">
        <h1 className="title">Testimonials</h1>
        <h2 className="subtitle">what our customers say about us</h2>
      </div>
      <div className="test-container">
        <div className="test-text">
          <h3>connect with other customers</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sequi
            explicabo asperiores natus earum porro?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam, reiciendis!
          </p>
        </div>
        <div className="img-container">
          <div className="img-test-wrapper">
            <img src={ruthImg} alt="" />
            <div className="wrapper-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, ad!
              </p>
              <h4>ruth mutisya</h4>
            </div>
          </div>

          <div className="img-test-wrapper">
            <img src={ruthImg} alt="" />
            <div className="wrapper-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, ad!
              </p>
              <h4>ruth mutisya</h4>
            </div>
          </div>

          <div className="img-test-wrapper">
            <img src={ruthImg} alt="" />
            <div className="wrapper-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, ad!
              </p>
              <h4>ruth mutisya</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
