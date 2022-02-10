import StoryCard from '../../components/storyCard';
import stories from '../../utils/stories.json';


const Feed = () => {
    let storyCardArray = []
    
    const mapStories = stories.map(story => {
        storyCardArray.push(story)
        return <StoryCard props={story} key={story.author}></StoryCard>
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
        margin: 5,
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

}

