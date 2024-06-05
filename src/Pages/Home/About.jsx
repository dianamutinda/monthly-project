import AboutImg from "../../assets/about.jpeg"
const About = () =>{
    return(
        <div className="about-section">
            <div className="image-wrapper">
                <div className="about-image">
                <img src={AboutImg} alt="about image" />

                </div>
                <div className="about-text">
                <h1 className="about-title">About us</h1>
                    <p className="about-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit nesciunt quam eum qui, alias ipsam sequi suscipit totam voluptatem quo veritatis incidunt, nulla eaque eligendi eveniet consequatur iste deleniti eius, repellendus dicta. Maiores officia facere magni itaque, cum debitis maxime architecto, quae illum quas doloribus saepe fuga perspiciatis consequatur iusto?</p>
                </div>
               
            </div>

        </div>
    )
}
export default About;