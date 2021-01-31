//import { Link } from "react-router-dom";
//import "bootswatch/dist/Cerulean/bootstrap.min.css";



function About() {

    const styles = {


        h2: {
            paddingBottom: "10px",
            paddingTop: "20px",
        },

        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginBottom: "150px"
        }
    }

    return (
        <>
            <div className="container" style={styles.container}>
                <div className="row">
                    <div className="col text-center">
                        <h2 className="text-white" style={styles.h2}>Hi, my name is Saida</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <img className="img-fluid"
                            src={`${process.env.PUBLIC_URL}/assets/copyDa.jpg`}
                            alt="logo" />
                    </div>

                    <div className="col-sm-12 col-md-6 text-white">
                        <p>
                            I am a Full-Stack developer certified through the University of Arizona Coding Bootcamp.
                        </p>
                    </div>
                </div>
            </div>

            <br />
            <hr />
            <br />

        </>
    )
}

export default About;