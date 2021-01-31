import React from "react";

function Hero(props) {

    const styles = {
        heroImage: {
            background: ` url(${process.env.PUBLIC_URL +"/assets/wheat.jpg"})`,
            minHeight: "calc(100vh - 90px)",
            minWidth: "100%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            position: "relative",
            paddingTop: "50px"
        }
    }

    return (
        <>
            <div className="hero text-center" style={styles.heroImage}>
                {props.children}
            </div>
        </>
    )
}

export default Hero;