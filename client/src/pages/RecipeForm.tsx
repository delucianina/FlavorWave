import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialFormData = {
    name: '',
    ingredients: '',
    instructions: '',
    error_message: ''
}

function RecipeForm() {
  const [formData, setFormData] = useState(initialFormData); 
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(oldFormData => ({
      ...oldFormData,
      [event.target.name]: event.target.value
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await axios.post('/api/recipes/create', formData);

      navigate('/recipes');
    } catch (error: any) {
      setFormData(oldFormData => ({
        ...oldFormData,
        // This is the property on the formData above
        error_message: error.response.data.message
      }));
    }
  };

  return (
    <section className="row">
      <form onSubmit={handleSubmit} className="col-4 mx-auto mt-5">
        <h2 className="text-center">Create Recipe</h2>

        {formData.error_message && <p className="text-danger text-center">{formData.error_message}</p>}

        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Name</label>
          <input onChange={handleInputChange} name="name" type="text" className="form-control" id="input" />
        </div>

        <div className="mb-3">
          <label htmlFor="address-input" className="form-label">Ingredients</label>
          <input onChange={handleInputChange} name="ingredients" type="text" className="form-control" id="address-input" />
        </div>

        <div className="mb-3">
          <label htmlFor="address-input" className="form-label">Instructions</label>
          <input onChange={handleInputChange} name="instructions" type="text" className="form-control" id="address-input" />
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </section>
  )
}

export default RecipeForm;