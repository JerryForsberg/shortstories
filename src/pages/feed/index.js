import StoryCard from '../../components/storyCard';

const Feed = () => {
    return (
        <div style={styles.container}>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
            <StoryCard></StoryCard>
        </div>
    )
}

export default Feed;

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: 5,
    }
}

