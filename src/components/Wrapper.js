import React from "react";
import Container from "react-bootstrap/Container";

function Wrapper() {
    const styles = {
        container: {
            background: "linear-gradient(rgba(0, 0, 0, 0.5),  rgba(0,0,0,0.9))",
            marginTop: "50px",
            marginBottom: "150px",
        }
    }
    return <Container style={styles.container} />;

}

export default Wrapper;