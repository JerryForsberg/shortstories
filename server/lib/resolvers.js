const User = require('./mongo/models/user');
const Post = require('./mongo/models/post')

// Provide resolver functions for the GraphQL schema
const resolvers = {
    /**
     * A GraphQL Query for users that uses a Users model to query MongoDB
     * and get all Post/user documents. Any Query defined here must also be defined in the Schema
     */
    Query: {
        users: async () => await User.find({}),
        getUser: async (_, { id }) => {
            return await User.findById(id)
        },
        posts: async () => await Post.find({}),
        getPost: async (_, { id }) => {
            return await Post.findById(id)
        },
    },
    /**
     * A GraphQL Mutation that provides functionality for adding user to
     * the Users list and return user after successfully adding to list. Any mutation defined here must also be defined in the schema
     */
    Mutation: {
        addUser: async (parent, args) => {
            const { name, userName, email } = args.user
            const newUser = new User({ name, userName, email });
            await newUser.save();
            return newUser
        },
        deleteUser: async (parent, args) => {
            const { id } = args
            await User.findByIdAndDelete(id)
            return `User with id: ${id} deleted`
        },
        updateUser: async (parent, args) => {
            const { name, userName, email } = args.user
            const { id } = args
            const updates = {}
            if (name !== undefined) {
                updates.name = name
            }
            if (userName !== undefined) {
                updates.userName = userName
            }
            if (email !== undefined) {
                updates.email = email
            }
            const updatedUser = await User.findByIdAndUpdate(
                id,
                updates,
                { new: true }
            );
            return updatedUser;
        },
        addPost: async (parent, args) => {
            //todo: find the user by implementing context
            //const userID = ctx.user.id
            //const author = User.findById(userID)\
            // then add author to the newPost args
            const { title, body, genre} = args.post
            const newPost = new Post({ title, body, genre });
            await newPost.save();
            return newPost
        },
        deletePost: async (parent, args) => {
            const { id } = args
            await Post.findByIdAndDelete(id)
            return `Post with id: ${id} deleted`
        },
        updatePost: async (parent, args) => {
            //todo: find the user by implementing context
            //const userID = ctx.user.id
            //const author = User.findById(userID)\
            // then add author to the updatedPost args
            const { title, body, genre } = args.post
            const { id } = args
            const updates = {}
            if (title !== undefined) {
                updates.name = name
            }
            if (body !== undefined) {
                updates.userName = userName
            }
            if (genre !== undefined) {
                updates.email = email
            }
            const updatedPost = await Post.findByIdAndUpdate(
                id,
                updates,
                { new: true }
            );
            return updatedPost;
        },
    }
};

module.exports = resolvers;