import Button from 'react-bootstrap/Button';

function NavIcon (props) {
    return (
        <Button style={styles.button}>{props.title}</Button>
    )
}

export default NavIcon;

const styles = {
    button: {
        border: 'none',
        backgroundColor: 'white'
    },
}