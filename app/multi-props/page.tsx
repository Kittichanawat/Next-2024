"use client";

interface UserProfileProps {
    name : string,
    age: number,
    email: string,
    isAdmin?: boolean
}

function UserProfile({name, age, email, isAdmin}: UserProfileProps) {
    return (
        <div>
            <h2>Name : {name}   </h2>
            <h2>Age : {age}   </h2>
            <h2>Email : {email}   </h2>
            {isAdmin && <p>Admin User</p>}
        </div>
    );
}

export default UserProfile;