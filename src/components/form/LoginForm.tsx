import { useForm } from 'react-hook-form';
import { useUserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, isAuthenticated } = useUserContext();
    const navigate = useNavigate();

    const onSubmit = data => {
        loginUser(data.email, data.password);
    };

    useEffect(() => {
        console.log(isAuthenticated)
        if (isAuthenticated) {
            navigate('/dashboard');
        }
    }, [isAuthenticated, navigate]);

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2x">
                Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                    <input 
                        id="email" 
                        type="email" 
                        {...register("email", { required: "Email is required" })}
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                        placeholder="name@company.com" 
                    />
                    {errors.email && <span className="text-red-600">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                    <input 
                        id="password" 
                        type="password" 
                        {...register("password", { required: "Password is required" })}
                        placeholder="••••••••" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    />
                    {errors.password && <span className="text-red-600">{errors.password.message}</span>}
                </div>
                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
            </form>
        </div>
    );
}

export default LoginForm;
