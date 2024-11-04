// import { useState, useEffect } from 'react';
// import axios from 'axios';

// NINA'S CODE ----------------------
// THIS NEEDS TO BE UPDATED TO LOAD IN THE USER'S INFO AND DISPLAY DYNAMICALLY 


function Profile() {

    return (
        <section>
            <div className="profile-page">
                <div className="profile-block">
                    <div className="profile-image"></div>
                    <h4>What's cookin'<br></br>username</h4>
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