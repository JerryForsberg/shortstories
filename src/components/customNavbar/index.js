import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavIcon from '../navIcon';
import Image from 'react-bootstrap/Image'

function CustomNavbar () {
    return (
    <>
        <Navbar bg="light" variant="light">
            <Container style={styles.container}>
                <NavIcon title={'Login'}/>
                <NavIcon title={'Signin'}/>
                <NavIcon title={'Explore'}/>
            </Container>
        </Navbar>
        <Container>
            <img src='./images/cover.jpg'/>
        </Container>
    </>
    )
}

export default CustomNavbar

const styles = {
    container: {
        display: 'flex',
        margin: 10,
        flex: 1,
        justifyContent: 'space-between',
    },
    bgContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundPosition: 'center', /* Center the image */
        backgroundRepeat: 'no-repeat', /* Do not repeat the image */
        backgroundSize: 'cover', /* Resize the background image to cover the entire container */
        height: '100vh',  
    }
}