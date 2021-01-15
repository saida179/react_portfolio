import "./style.css";
import Row from "../Row"
import Col from "../Col"
import Container from "../Container"

function Footer() {
    return (
        <Container fluid>
            <footer style={{ margin: '0 auto', alignContent: 'center', textAlign: 'center' }}>
                <Row>
                    <Col className="social-media" size="md-12">
                        <a href="https://www.linkedin.com/in/zaida-arevalo-123a071b3/" rel="noreferrer" target="_blank"><i
                            class="fab fa-linkedin-in social-icon"></i></a>
                        <a href="https://github.com/saida179" rel="noreferrer" target="_blank"><i class="fab fa-github social-icon"></i></a>
                    </Col>
                    <span style={{ margin: '0 auto', alignContent: 'center', textAlign: 'center' }}>Saida Arevalo &#169; 2021 All Rights Reserved</span>
                </Row>
            </footer>
        </Container>

    );
}

export default Footer;