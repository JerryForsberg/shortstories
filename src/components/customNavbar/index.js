import NavIcon from '../navIcon';
import { Link } from 'react-router-dom'

function CustomNavbar(props) {
    return (
        <div style={styles.container}>
            <Link to="/Login"> <NavIcon title={'Login'} /> </Link>
            <Link to="/SignUp"> <NavIcon title={'Signin'} /> </Link>
            <Link to="/Feed"> <NavIcon title={'Explore'} /> </Link>
        </div>
    )
}

export default CustomNavbar

const styles = {
    container: {
        display: 'flex',
        marginHorizontal: 10,
        justifyContent: 'space-between',
    },
}