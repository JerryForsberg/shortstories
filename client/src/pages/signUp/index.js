import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, gql } from '@apollo/client';

//how to use useQuery: 
//const QUERY_ALL_USERS = gql'
//      query users

const CREATE_NEW_USER = gql`
    mutation AddUser($input: UserInput) {
        addUser(user: $input) {
            _id
            name
            userName
            email
        }
    } 
`

export default function SignUp() {
    const [createUser, { data, error }] = useMutation(CREATE_NEW_USER)
    if (data) {
        console.log(data)
    }
    if (error) {
        console.log(error.message)
    }

    const [form, setForm] = useState({
        name: "",
        userName: "",
        email: "",
    });

    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the database.
        const newUser = { ...form };
        createUser({ variables: { input: newUser } })
        console.log(form)
        




        setForm({ name: "", userName: "", email: "" });
        // navigate("/");
    }

    // This following section will display the form that takes the input from the user.
    return (
        <div>
            <h3>Sign Up</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={form.name}
                        onChange={(e) => updateForm({ name: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="userName">user Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="userName"
                        value={form.userName}
                        onChange={(e) => updateForm({ userName: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        value={form.email}
                        onChange={(e) => updateForm({ email: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="submit"
                        value="Create person"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    )
}