import React, { useEffect, useState } from 'react';

const ManageUser = () => {
    const [regUser, setRegUser] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setRegUser(data))
    },[])
    console.log(regUser)
    return (
        <div>
            <p>This is manage users</p>
        </div>
    );
};

export default ManageUser;