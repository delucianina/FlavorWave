

interface UserProfile {
    name: string;
    email: string;
    dietaryRestrictions: string[];
    usersRecipes: string[];
}

const UserProfile: React.FC<UserProfile> = ({name, email, dietaryRestrictions, usersRecipes}) => {
    return (
        <div>
            <header>
                <h1>User Profile</h1>
            </header>
            <main>
                <section>
                    <h2>Information</h2>
                    <p>Name: {name}</p>
                    <p>Email: {email}</p>
                </section>
                

                ///DIETARY RESTRICTIONS
                <section>
                    <h2>Dietary Restrictions</h2>
                    <ul>
                        {dietaryRestrictions.map((restriction, index) => (
                            <li key={index}>{restriction}</li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>





    );
};