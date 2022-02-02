import Button from '@mui/material/Button'

function NavIcon(props) {



    return (
        <Button variant="text" style={styles.button}>{props.title}</Button>
    )
}

export default NavIcon;

const styles = {
    button: {
        border: 'none',
        margin: 20,
        color: 'white',
    },
}