import React from "react";
import { useForm } from "react-hook-form";
import {useNavigate} from "react-router-dom"
import "./Login.css"

function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    navigate("/products")
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));
  
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label >First Name</label>
      <input {...register("firstName", { required: true , pattern: /^[A-Za-z]+$/i})} />
      {errors.firstName?.type === 'required' && "First name is required"}
      <label >Last Name</label>
      <input {...register("lastName", { required: true,  pattern: /^[A-Za-z]+$/i })} />
      {errors.lastName && <p>Last name is required</p>}
      <label>Email</label>
      <input {...register("mail", { required: "Email Address is required" })} />
      <p>{errors.mail?.message}</p>
      
      <input type="submit" />
    </form>
    </div>
  )
}

export default Login