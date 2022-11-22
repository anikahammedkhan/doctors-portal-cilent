import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';

const Register = () => {

    const [error, setError] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { createUser } = useContext(AuthContext);

    const handleRegister = (data) => {
        setError('');
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                toast.success('Registration Successful');
                updateProfile(user,
                    { displayName: data.name })
                    .then(() => {
                    })
                    .catch((error) => {
                        setError(error.message);
                    });
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });

    }


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h1 className='text-4xl text-center font-bold'>Register</h1>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" className="input input-bordered w-full max-w-xs"
                            {...register("Name", {
                                required: "Name is required"
                            })}
                            placeholder="Your Name" />
                        {errors.Name && <p role="alert" className='text-red-500'>{errors.Name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" className="input input-bordered w-full max-w-xs"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                }
                            })}
                            placeholder="Your Email" />
                        {errors.email && <p role="alert" className='text-red-500'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs mb-6">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" className="input input-bordered w-full max-w-xs"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must have at least 8 characters"
                                },
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,
                                    message: "Password must have at least 1 uppercase, 1 lowercase, 1 number and 1 special character"
                                }
                            })}
                            placeholder="Your Password" />
                        {errors.password && <p role="alert" className='text-red-500'>{errors.password?.message}</p>}
                    </div>
                    <div>
                        {error && <p role="alert" className='text-red-500'>{error}</p>}
                    </div>
                    <input className='btn btn-accent text-white font-semibold w-full' type="submit" value="Register" />
                </form>
                <p>Already have an account ? <Link to="/login" className="text-secondary">Login</Link></p>
                <div className="flex flex-col w-full border-opacity-50">
                    <div className="divider">OR</div>
                </div>
                <button className='btn btn-outline btn-info w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Register;