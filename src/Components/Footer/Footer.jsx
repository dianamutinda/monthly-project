import "./Footer.css"

const Footer = () => {
  return (
    <section>
      <div className="footer">
      <div className="footer-title">
        <h1>keep in touch</h1>
        <div className="footer-input">
          <input type="text" />
          <label htmlFor="">email</label>
        </div>
      </div>
      <div className="footer-container">
      <div className="sub-footer">
        <div className="footer-text">
          <h1>zaph tours</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem
            numquam reiciendis dolorem totam, architecto dicta quae earum nemo,
            dolorum vitae, neque impedit sint officiis. Exercitationem dolore
            illo minima molestiae impedit?
          </p>
        </div>
        <div className="footer-links">
          <h2> links</h2>
          <ol className="items">
            <li className="item">
              <a href="">home</a>
            </li>
            <li className="item">
              <a href="">destinations</a>
            </li>
            <li className="item">
              <a href="">trip types</a>
            </li>
            <li className="item">
              <a href="">contact us</a>
            </li>
          </ol>
        </div>
      </div>
      <div className="footerbottom">
      <p>&copy; all rights reserved diana mwende 2024</p>
    </div>
      </div>
      </div>
   
    </section>
  );
};
export default Footer;
