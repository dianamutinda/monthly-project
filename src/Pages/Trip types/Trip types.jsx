import parkImg from "../../assets/National-Park-Kenya.jpeg"
const Triptypes = () =>{
    return(
        <section>
            <div className="trip">
                <div className="trip-container">
                    <div className="trip-image">
                        <img src={parkImg} alt="" />
                        <div>
                            <h3>honeymoon</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, nulla.</p>
                            <p>price:$130</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}
export default Triptypes;