import TextEditor from '../../components/textEditor';
import Container from '@mui/material/Container'

function CreatePost() {
    return (
        <Container style={styles.main}>
            <TextEditor />
        </Container>
    )
}

export default CreatePost;

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between"

    }
}