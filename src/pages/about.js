import React from "react";
import "bootswatch/dist/[Cerulean]/bootstrap.min.css";


function About() {

    const styles = {
        img: {
            marginBottom: "70px",
            paddingBottom: "20px",
        },

        h2: {
            paddingBottom: "10px",
            paddingTop: "20px",
        },
        
        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px"
        }
    };

    return(
        <div classNameName="container"  style={styles.container}>
            <div classNameName="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card-body">
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4">
                        <img src="/../../public/assets/copyDa.jpg" className="img-fluid rounded-circle" style={styles.img}/>
                    </div>
                            <div className="col-lg-4">
                                <p>
                                    Hi there, I'm Saida Arevalo and I am a current student at the University of Arizona - Coding
                                    Bootcamp. By the and of this program I hope to be a Full-Stack developer. 
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;