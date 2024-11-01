// import { useState, useEffect } from 'react';
// import axios from 'axios';

function Profile() {
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
        <section className="profile-page">
            <div className="profile-block">
                <div className="profile-image"></div>
                <h4>What's cooking,<br></br>firstName?</h4>
            </div>
            {/* <p className="text-center">{quote}</p> */}
        </section>
    )
}

export default Profile;