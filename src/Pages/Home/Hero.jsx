import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <h1 className="tag-line">Best Safaris and Adventures</h1>
        <p className="tag-line-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas hic
          vel rem necessitatibus reiciendis possimus atque velit deleniti sed
          blanditiis!
        </p>
        <div className="cta">
          <Link >about us</Link>
          <Link >testimonials</Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;
