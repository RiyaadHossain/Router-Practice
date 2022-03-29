import React from 'react';
import { Link/* , useNavigate  */} from 'react-router-dom';

const User = ({ user }) => {
    // const navigate = useNavigate()
    return (
        <div>
            <h4>{user.name} <Link to={`/users/${user.id}`}>See</Link></h4>
        </div>
    );
};

export default User;