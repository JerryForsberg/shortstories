import StoryCard from '../../components/storyCard';
import stories from '../../utils/stories.json';
import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query {
        users {
            _id
            name
            userName
            email
        }
    }
`

const Feed = () => {
    let storyCardArray = []
    const { data, loading, error } = useQuery(QUERY_ALL_USERS)
    if (loading) {
        return <h1>data loading</h1>
    }
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error)
    }

    const mapStories = stories.map(story => {
        storyCardArray.push(story)
        return <StoryCard props={story} key={story.author}></StoryCard>
    })

    return (
        <div style={styles.container}>
            {mapStories}
            <div>
                {data && data.users.map((user) => {
                    return (
                        <div>
                            <li>
                                {user.name}
                            </li>
                            <li>
                                {user.userName}
                            </li>
                            <li>
                                {user.email}
                            </li>
                        </div>
                    )
                })}
            </div>
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

