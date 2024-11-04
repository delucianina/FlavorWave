import { useState, useEffect } from 'react';
import axios from 'axios';
// import { User } from '../interfaces';

// NINA'S CODE ----------------------
// THIS NEEDS TO BE UPDATED TO LOAD IN THE USER'S INFO AND DISPLAY DYNAMICALLY 

interface User {
    id: number;
    username: string;
    email: string;
    password?: string;
}


function Profile() {
    const [quote, setQuote] = useState('Loading...');
        const url = 'https://api.api-ninjas.com/v1/quotes?category=food';
        const apiKey = 'xbKJ/QLoox2DniJRCcKjzg==x45sJPNGwXeAw1X1';
    
        useEffect(() => {
            axios.get(url, {
                headers: {
                    'X-Api-Key': apiKey
                }
            }).then((res) => {
                setQuote(res.data[0].quote);
            });
        }, []);
    
    const [user, setUser] = useState<User | null>(null);
        useEffect(() => {
            axios.get('/auth/user')
            .then(res => {
                setUser(res.data.user);
            })
        }, [])
    
    return (
        <section>
            <div className="profile-page">
                <div className="profile-block">
                    <div className="profile-image"></div>
                    <h4>What's cookin'<br></br>{user && (
                        <span key={user.id}>{user.username}</span>
                    )}</h4>
                    <p>{quote}</p>
                </div>

                <div className="profile-block diet-pref">
                    <div className="diet-pref-title">
                        <h2>Dietary Preferences</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button className="add-diet-pref">Add Diet Preference</button>
                    </div>
                    <div className="diet-pref-list">
                        {/* The below is placeholder */}
                        <p>Preference/restriction/allergy</p>
                        <p>Preference/restriction/allergy</p>
                        <p>Preference/restriction/allergy</p>
                        <p>Preference/restriction/allergy</p>
                        <p>Preference/restriction/allergy</p>
                        <p>Preference/restriction/allergy</p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Profile;