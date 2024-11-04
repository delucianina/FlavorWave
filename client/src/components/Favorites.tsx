// NINA'S CODE -------------------------
// NEEDS TO BE UPDATED TO DISPLAY FAVORITE RECIPES DYNAMICALLY, I THINK TAKING INPUT FROM MATT'S CODE 


function Favorites() {
    return (

        // THIS IS FORMATTED IN A REPEATING 3 COLUMN GRID WITH RECIPE CARDS IN MIND, BUT THE RECIPES ARE NOT PREPARED ON THE BACK END TO DISPLAY THIS WAY RIGHT NOW, SO SOMETHING NEEDS TO BE ADJUSTED LATER 
        <div className="favorites-container">
            <h2>FAVORITES</h2>
            <div className="grid-wrapper">
                <div className="col">
                    <h4>Recipe 1</h4>
                    <p>Recipe description preview</p>
                </div>
                <div className="col">
                    <h4>Recipe 2</h4>
                    <p>Recipe description preview</p>
                </div>
                <div className="col">
                    <h4>Recipe 3</h4>
                    <p>Recipe description preview</p>
                </div>
                <div className="col">
                    <h4>Recipe 4</h4>
                    <p>Recipe description preview</p>
                </div>
                <div className="col">
                    <h4>Recipe 5</h4>
                    <p>Recipe description preview</p>
                </div>
                <div className="col">
                    <h4>Recipe 6</h4>
                    <p>Recipe description preview</p>
                </div>
            </div>
        </div>
    )
}

export default Favorites;