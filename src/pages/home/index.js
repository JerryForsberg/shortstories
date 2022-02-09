import CustomNavbar from '../../components/customNavbar';
import React from 'react';
import Paper from '@mui/material/Paper';
import bgImage from '../../images/cover.jpg';


const styles = {
    paperContainer: {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        height: '100vh',
    }

}

function Home() {

    return (
        <Paper style={styles.paperContainer}>
            <CustomNavbar />

        </Paper>
    )
}

export default Home;