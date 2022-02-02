import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function CustomNavbar() {
    return (
        <Navbar bg="light" variant="light">
            <Container style={styles.container}>
                <Button style={styles.button}>Login</Button>
                <Button style={styles.button}>Signup</Button>
                <Button style={styles.button}>Explore</Button>
            </Container>
        </Navbar>
    )
}

export default CustomNavbar

const styles = {
    container = {
        display: 'flex',
        margin: 10,
        flex: 1,
        justifyContent: 'space-between',
        border: "none",
        backgroundColor: "white"
    },
    button = {

    }
}