import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UserInfo = () => {
    const { userId } = useParams()
    const [user, setUser] = useState()
    useEffect(() => {
        const URL = `https://jsonplaceholder.typicode.com/users/${userId}`
        fetch(URL).then(res => res.json()).then(json => setUser(json))
    }, [userId])
    return (
        <div>
            <h3>User Details💁🏻‍♂️</h3>
            <div>
                <h4>Name: {user?.name}</h4>
                <p><strong>Email:</strong> {user?.email}</p>
                <p><strong>Phone:</strong> {user?.phone}</p>
            </div>
        </div>
    );
};

export default UserInfo;