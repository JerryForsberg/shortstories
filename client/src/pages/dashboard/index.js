import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogoutButton from "../../components/LogoutButton";

function Dashboard() {

    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }
    return (
        <div>
        <LogoutButton />
        {isAuthenticated && (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          )
        }
          </div>
        
    )
}

export default Dashboard;