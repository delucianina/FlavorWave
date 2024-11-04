import { useState, useEffect } from 'react';
import axios from 'axios';

// RITA'S CODE ------------------------------------- 

// const [quote, setQuote] = useState('Loading...');
//     const url = 'https://api.api-ninjas.com/v1/quotes?category=food';
//     const apiKey = 'xbKJ/QLoox2DniJRCcKjzg==x45sJPNGwXeAw1X1';

//     useEffect(() => {
//         axios.get(url, {
//             headers: {
//                 'X-Api-Key': apiKey
//             }
//         }).then((res) => {
//             setQuote(res.data[0].quote);
//         });
//     }, []);



interface UserProfile {
    name: string;
    email: string;
    dietaryRestrictions: string[];
    usersRecipes: string[];
}

const UserProfile: React.FC<UserProfile> = ({name, email, dietaryRestrictions, usersRecipes}) => {
    return (
        <div>

            {/* ///USER PROFILE */}
            <header>
                <h1>User Profile</h1>
            </header>

            {/* ///USER PROFILE INFORMATION */}
            <main>
                <section>
                    <h2>Profile</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                    {/* <p>{quote}</p> */}

                </section>
                

                {/* ///DIETARY RESTRICTIONS */}
                <section>
                    <h2>My Dietary Restrictions</h2>
                    <ul>
                        {dietaryRestrictions.map((restriction, index) => (
                            <li key={index}>{restriction}</li>
                        ))}
                    </ul>
                </section>

                <section>
                    <h2>My Recipes</h2>
                    <ul>
                        {usersRecipes.map((recipe, index) => (
                            <li key={index}>{recipe}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>

    );
};

export default UserProfile;