import CustomNavbar from '../../components/customNavbar'
import React from 'react';
import Container from '@mui/material/Container'


function Home() {
    return (
        <Container style={styles.main}>
            <CustomNavbar />
        </Container>
    )
}

export default Home;

const styles = {
    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',

    },
    bgImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    }
}