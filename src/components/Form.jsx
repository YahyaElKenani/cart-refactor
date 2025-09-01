import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { loginUser } from "../utils/loginUser";
import { registerUser } from "../utils/registerUser";
const inputStyles = ` 
w-full 
bg-gray-50 
text-black 
p-[5px] 
h-[30px] 
outline-0
`
export default function Form({type}) { 
    const navigate = useNavigate();
    const [user, setUser] = useState({name: '', email: '', password: ''});
    const handleSubmit = (e) => { 
        e.preventDefault();
        type === 'REGISTER' ? 
        registerUser(user.name, user.email, user.password, navigate)
        : 
        loginUser(user.name, user.password, navigate);
    }
    return ( 
        <div className="w-full min-h-[100dvh] flex justify-center items-center md:px-70 sm:px-20 px-5"> 
            <form className="flex flex-col bg-blue-500 items-center justify-between text-gray-50 p-5 w-full gap-2" onSubmit={handleSubmit}>
                <h2 className="text-4xl font-bold">
                    {
                        type === 'REGISTER' ? 
                        'Register User'
                        : 
                        'Login User'
                    }
                </h2>
                <input type="text" placeholder="Enter Username" className={inputStyles} 
                onChange={(e) => setUser((prevState) => ({...prevState, name: e.target.value}))} />
                { 
                    type === 'REGISTER' && 
                    <input type="email" name="email" id="email" placeholder="Enter User Email" className={inputStyles} 
                    onChange={(e) => setUser((prevState) => ({...prevState, email: e.target.value}))} />
                }
                <input type="password" placeholder="Enter User Password" className={inputStyles} 
                onChange={(e) => setUser((prevState) => ({...prevState, password: e.target.value}))} />
                <button className="bg-gray-50 text-black w-full cursor-pointer hover:opacity-70 h-[30px] p-[5px]">
                    {
                        type === 'REGISTER' ? 
                        'Sign Up'
                        : 
                        'Sign In'
                    }
                </button>
                { 
                    type === 'REGISTER' ? 
                    <div className="flex items-center gap-1">
                        <p className="text-black font-bold">Already Have An Account?</p>
                        <p onClick={() => navigate('/login')} className="cursor-pointer hover:opacity-70 hover:underline hover:decoration-1">Login</p>
                    </div>
                    : 
                    <div className="flex items-center gap-1">
                        <p className="text-black font-bold">Sign Up Now?</p>
                        <p onClick={() => navigate('/register')} className="cursor-pointer hover:opacity-70 hover:underline hover:decoration-1">Register</p>
                    </div>
                }
            </form>
        </div>
    )
}