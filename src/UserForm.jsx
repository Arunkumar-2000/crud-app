import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { addUser } from "./redux/features/userSlice";


const UserForm = () => {

   const dispatch = useDispatch()
 
   const {register, handleSubmit, reset, formState: { errors}} = useForm();
   
   const submiData = (data) => {
    dispatch(addUser(data))
    reset()
    console.log(data);
    
   }
  return (
    <>
      <h1>UserForm</h1> 
      <form  onSubmit={handleSubmit(submiData)} className="mb-4 p-3" >
        {/* name */}
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input
             type="text" 
             className={`form-control ${errors.name ? 'is-invalid' : ''}`}
              placeholder="Enter Your Name " 
              { ...register('name', {required:"Name is required"})}
              />
              {errors.name && <div className="invalid-feedback">
                {errors.name.message}</div>}
        </div>
        {/* email */}
        <div className="mb-3">
            <label  className="form-label">Email</label>
            <input 
            type="email" 
             className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="Enter Your Email" 
           { ...register('email', {required:"Email is required"})}
            />    
                {errors.email && <div className="invalid-feedback">
                {errors.email.message}</div>}
        </div>
        <button className="btn btn-primary" type="submit">Add-User</button>
      </form>
    </>
  )
}

export default UserForm
