import { useState } from 'react'
import './signup.styles.css'

const SignUp = () => {
    
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("")
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");

    const [form, setForm] = useState({
      fname: fname,
      lname: lname,
      username: userName,
      password: password
    })

    const handleInputChange = (e) => {
      const inputValue = e.target.value;
      const elemId = e.target.id;
  
      if(elemId === "fname"){
        setFname(inputValue);
      } else if (elemId === "lname"){
        setLname(inputValue);
      } else if (elemId === "username") {
        setUsername(inputValue)
      } else if (elemId === "password"){
        setPassword(inputValue);
      } else {
        setRepeatPassword(inputValue);
      }
    };

    const handleSubmitForm = async (e) => {
      e.preventDefault();;

      try {
        await fetch('/url', {
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: form
        });
      } catch (error) {
        console.log(error)
      }

    }

    return (
      <div className="signup-container">
        <form onSubmit={(e) => handleSubmitForm(e)}>
            <div className='form-element'>
                <label htmlFor="fname">First Name</label>
                <input key={1} id='fname' type="text" onChange={(e) => handleInputChange(e)} value={fname}/>
            </div>
            <div className='form-element'>
                <label htmlFor="lname">Last Name</label>
                <input key={2} id='lname' type="text" onChange={(e) => handleInputChange(e)} value={lname}/>
            </div>
            <br />
            <div className='form-element'>
                <label htmlFor="username">Username</label>
                <input key={3} id='username' type="text" onChange={(e) => handleInputChange(e)} value={userName}/>
            </div>
            <div className='form-element'>
                <label htmlFor="password">Password</label>
                <input key={4} id='password' type="text" onChange={(e) => handleInputChange(e)} value={password}/>
            </div>
            <div className='form-element'>
                <label htmlFor="repeatpassword">Repeat Password</label>
                <input key={5} id='repeatpassword' type="text" onChange={(e) => handleInputChange(e)} value={repeatPassword}/>
            </div>
            <br />
            <button type='submit'>
              Register
            </button>
            <p>Already have an account? <u>Sign In</u></p>
        </form>

        
      </div>
    )
}

export default SignUp;