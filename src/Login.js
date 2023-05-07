import { useState } from 'react';

function Login() {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs);
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Username:
        <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
        />
        </label>
        <label>Password:
        <input 
          type="password" 
          name="password" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
        </form>
    </div>
  )
}

export default Login