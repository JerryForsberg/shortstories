import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { width } from "@mui/system";

const MyProfile = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} style={width= "120px"} />
                <h1>Welcome {user.name}</h1>
                {JSON.stringify(user)}
            </div>
        )
    )
}