import { collection, doc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebase';

import './AdminDashboard.css';


const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [displayUsers, setDisplayUsers] = useState([]);
    const dbReference = collection(db, "UserRoles");

    useEffect(() => {
        const getUserRolesFromDb = async() => {
            const data = await getDocs(dbReference);
            console.log('database-read');
            let temp = data.docs.map((doc) => ({...doc.data(), id:doc.id}));
            for (let i=0; i<temp.length; ++i) {
                console.log(temp[i].email);
                console.log(temp[i].roles);
            }
            setUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
            setDisplayUsers(data.docs.map((doc) => ({...doc.data(), id:doc.id})));
        };

        getUserRolesFromDb();
    }, []);

    const onCheckBoxChange = (e, email, role) => {

        let newArr = [...users];
        for (let i=0; i<newArr.length; ++i) {
            if (e.target.checked) {
                if (newArr[i].email === email && !newArr[i].roles.includes(role)) {
                    newArr[i].roles.push(role);
                }
            } else {
                if (newArr[i].email === email && newArr[i].roles.includes(role)) {
                    newArr[i].roles = newArr[i].roles.filter((item) => {
                        return item !== role;
                    })
                }
            }
        }

        setUsers(newArr);
    }

    const onUpdateClick = async(e, email, id) => {

        let newRoles = [];

        for (let i=0; i<users.length; ++i) {
            if (users[i].email === email) {
                newRoles = users[i].roles;
                console.log ('new roles assigned');
            }
        }
        if (newRoles.length === 0) {
            console.log('still length 0');
            console.log('update failed');
            return 0;
        }

        const userDoc = doc(db, 'UserRoles', id);
        const newRolesDoc = {roles: newRoles};
        await updateDoc(userDoc, newRolesDoc);

        setDisplayUsers(users);
    }

    const onSearch = (e) => {
        let searchText = e.target.value.trim().toLowerCase();
        let searchedUsers = [];
        if (searchText.length == 0) {
            setDisplayUsers(users);
        }
        if (searchText.length>0){
            searchedUsers = users.filter(user => user.email.toLowerCase().includes(searchText))
            console.log('searched users');
            console.log(searchedUsers);
            setDisplayUsers(searchedUsers);
        }
    }

    return (
        <div className='admin-page-div'>
            <div className='list-users-div'>
                <div className='search-bar-div'>
                    <div className='search-bar-textbox-div'>
                        <input type='text' 
                            className='search-bar-textbox'
                            onChange={(e) => onSearch(e)}
                        />
                    </div>
                </div>


                {displayUsers.map((user) => {
                    return (
                        <div className='users-list-div'>
                            <div className='users-list-email-div'>
                                <p>{user.email}</p>
                            </div>

                            <div className='users-list-roles'>
                                {(() => {
                                    console.log('entered-user-list-roles-div');
                                    console.log(user.email);
                                    console.log('admin ' + user.roles.includes('admin'));
                                    console.log('customer ' + user.roles.includes('customer'));
                                    console.log('driver ' + user.roles.includes('driver'));
                                    console.log('manager ' + user.roles.includes('manager'));

                                    if (user.roles.includes('admin') && user.email==='nagadarshan.gaming@gmail.com') {
                                        return (
                                            <div className='admin-checkbox-div'>
                                                <input type="checkbox" 
                                                       id="admin-check-box" 
                                                       name="admin-check-box"
                                                       disabled='disabled'
                                                       value="admin" checked />
                                                <label htmlFor='admin-check-box'>Admin</label>
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div className='admin-checkbox-div'>
                                                <input type="checkbox" 
                                                       id="admin-check-box" 
                                                       name="admin-check-box" 
                                                       onChange={(e) => onCheckBoxChange(e, user.email, 'admin')} 
                                                       value="admin"
                                                       checked={user.roles.includes('admin')} />
                                                <label htmlFor='admin-check-box'>Admin</label>
                                            </div>
                                        );
                                    }
                                })()}

                                <div className='customer-checkbox-div'>
                                    <input type="checkbox" 
                                            id="customer-check-box" 
                                            name="customer-check-box"
                                            onChange={(e) => onCheckBoxChange(e, user.email, 'customer')}  
                                            disabled="disabled" 
                                            value="customer" checked />
                                    <label htmlFor="customer-check-box">Customer</label>
                                </div>

                                <div className='driver-checkbox-div'>
                                    <input type="checkbox" 
                                            id="driver-check-box" 
                                            name="driver-check-box" 
                                            onChange={(e) => onCheckBoxChange(e, user.email, 'driver')}
                                            value="driver"
                                            checked={user.roles.includes('driver')} />
                                    <label htmlFor="driver-check-box">Driver</label>
                                </div>

                                <div className='manager-checkbox-div'>
                                    <input type="checkbox" 
                                            id="manager-check-box" 
                                            name="manager-check-box" 
                                            onChange={(e) => onCheckBoxChange(e, user.email, 'manager')}
                                            value="manager"
                                            checked={user.roles.includes('manager')} />
                                    <label htmlFor="manager-check-box">Manager</label>
                                </div>

                            </div>

                            <div className='users-list-edit-button-div'>
                                <button type='button' 
                                    className='users-list-edit-button'
                                    onClick={(e) => onUpdateClick(e, user.email, user.id)}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    );
                })}

            </div>
        </div>
    )
}

export default AdminDashboard