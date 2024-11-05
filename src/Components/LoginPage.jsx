import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import td from "../resources/userid.json";

import jsonData from "../resources/userid.json";
import "../Style/form.css"
const loadData = [...jsonData];
// import "../Styles/form.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const navigate = useNavigate("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(loadData)

    const emailPattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";
    const passwordPattern = "[a-zA-Z0-9]{4,8}$";
    const newErrors = { email: "", password: "" };

    var isValidForm = true;

    if (!email.match(emailPattern)) {
      isValidForm = false;
      newErrors.email = "Email pattern is not correct";
    }
    if (!password.match(passwordPattern)) {
      isValidForm = false;
      newErrors.password =
        "Password pattern is not correct email test1@test.com and and Test1";
    }

    if (isValidForm) {
      // if(email === "user@test.com" && password === "Password123"){
      //     navigate("/Dashboard")
      // }
      // if(email === "user@test.com" && password === "Password123"){
      //     navigate("/Dashboard")
      // }
      console.log("loadData ", loadData);
      console.log("jsonData", jsonData);

      for (const obj1 of jsonData) {
        console.log("Obj: ", obj1);
        console.log(obj1.userId, obj1.pwd);
        if (obj1.userId === email) {
          //   const indexOfEmail = loadData.indexOf(email);
          if (obj1.pwd === password) {
            navigate("/Dashboard");
           
          } else {
            newErrors.password = "Password is not correct for user id.";
            // console.log("Password is incorrect for user id");
            setErrors(newErrors);
          }
          break;
        } else {
          newErrors.email = "Email id is not present in Database.";
        //   console.log("User Id is not present");
          setErrors(newErrors);
        }
      }
    } else {
      setErrors(newErrors);
      console.log("Errors generated are ", newErrors);
      console.log(newErrors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br></br>
        <br></br>
        <br></br>

        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>
        <br></br>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br></br>
        <br></br>
        <br></br>
        <button>Submit</button>
        <br></br>

        <h1 className="error" > {errors.email && <p>{errors.email}</p>} </h1>
        <h1 className="error"  style ={{color:"red"}}> {errors.password && <p>{errors.password}</p>} </h1>
      </form>
    </div>
  );
}

export default LoginPage;
