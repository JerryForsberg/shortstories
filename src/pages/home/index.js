import CustomNavbar from '../../components/customNavbar';
import React from 'react';
import Paper from '@mui/material/Paper';
import bgImage from '../../images/cover.jpg';
import Typography from '@mui/material/Typography';


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
            <div>
                <Typography variant='h2'>
                    Every body has a story to tell ...
                </Typography>
            </div>

        </Paper>
    )
}

export default Home;