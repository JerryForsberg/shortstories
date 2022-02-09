import StoryCard from '../../components/storyCard';
import stories from '../../utils/stories.json';


const Feed = () => {
    let storyCardArray = []
    const mapStories = stories.map(story => {
        storyCardArray.push(story)
        return <StoryCard props={story}></StoryCard>
    })
    return (
        <div style={styles.container}>
            {mapStories}
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

