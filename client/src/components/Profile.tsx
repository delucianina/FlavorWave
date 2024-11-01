// import { useState, useEffect } from 'react';
// import axios from 'axios';

function Profile() {
    // RANDOM QUOTE API ----------------
    // const [quote, setQuote] = useState('Loading...');
    // const url = 'https://api.api-ninjas.com/v1/quotes?category=computers';
    // const apiKey = 'OExYIVPGwjHy6vyDnuXSow==NqZk85kGepst2duc';

    // leave array empty, it'll only run once 
    // useEffect(() => {
    //     axios.get(url, {
    //         headers: {
    //             'X-Api-Key': apiKey
    //         }
    //     }).then((res) => {
    //         setQuote(res.data[0].quote);
    //     });
    // }, []);

    return (
        <section>
            <div className="profile-page">
                <div className="profile-block">
                    <div className="profile-image"></div>
                    <h4>What's cooking,<br></br>username</h4>
                </div>
                {/* <p className="text-center">{quote}</p> */}
                <div className="profile-block diet-pref">
                    <div className="diet-pref-title">
                        <h2>Dietary Preferences</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                        <button className="add-diet-pref">Add Diet Preference</button>
                    </div>
                    <div className="diet-pref-list">
                        {/* Put a table here? The below is placeholder */}
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