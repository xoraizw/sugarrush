import React from "react";
export default function Hero()
{
    return(
        <div className="container-fluid col-xxl-8 px-4 py-5" style={{backgroundColor: "#f2aa64", color: "#904a3c", borderBottom: "8px solid #f09942" ,boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"}}>
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src="./images/cake.jpg" className="d-block mx-lg-auto img-fluid" alt="Cake" width="700" height="500" loading="lazy" style={{borderRadius: "4px"}}/>
                </div>
                <div className="col-lg-6" >
                    <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3"  style={{color:"#502716"}}>Indulge in Heavenly Delights at our Cake Bakery!</h1>
                    <p className="lead">Welcome to our cake bakery, where heavenly delights await you. Our expert bakers create irresistible confections that blend exquisite flavors, delightful textures, and artistic designs. From birthdays to weddings and every occasion in between, our cakes are crafted with love and attention to detail, using the finest ingredients. Indulge in velvety layers of moist cake, adorned with luscious buttercream, silky ganache, or smooth fondant. Each masterpiece is meticulously decorated, showcasing intricate designs and personalized touches. Ordering is a breeze with our online gallery and convenient delivery services. Come and experience the magic of our cake bakery, and indulge in pure bliss.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    </div>
                </div>
            </div>
        </div>
    )
}