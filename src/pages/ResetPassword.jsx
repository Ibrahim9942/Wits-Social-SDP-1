import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { getAuth , sendPasswordResetEmail} from 'firebase/auth'


// forgot password feature
//This code is for a password reset page. A user enters their email address and clicks the 'reset password' button.
// This will send them a password reset email. There is also a link back to the login page for users who remember their password.

function ResetPassword() {

    const [email, setEmail] = useState('')
    const auth = getAuth();


    const triggerResetEmail = async () => {             /// send reset email
        await sendPasswordResetEmail(auth, email);
        console.log("Password reset email sent")
    }

    return (
        // This code renders a form that allows a user to reset their password. A user must enter their email address, and then click the "Reset password" button.
        // If a user remembers their password, they can click the "Return" link to go back to the login page.
        <div className="h-screen w-screen flex flex-wrap items-center justify-center p-3">
            <div className="flex items-center">
                <div className="hidden md:block">

                </div>
                <div className="flex flex-col flex-shrink-0 w-[350px]">
                    <div className="flex flex-col items-center justify-center rounded w-full border-[1px] border-gray-300 bg-white p-6">
                        <div className="w-full">
                            <img
                                src="/images/Wits Social.png"
                                className="h-14 mt-4 mx-auto my-3"
                                alt="instagram"
                            />
                        </div>
                        <div className="w-full px-5">
                            <form onSubmit={ResetPassword} name='login_form'>
                                <input
                                    type='email'
                                    value={email}
                                    required
                                    placeholder="Enter your email"
                                    onChange={e => setEmail(e.target.value)}/>
                                <button className="resetBtn" type="button" onClick={triggerResetEmail}>Reset password</button>
                            </form>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded w-full border-[1px] border-gray-300 mt-4 bg-white p-6">
                        <div className="text-sm">
                            WAIT! I remember my password?{" "}
                            <Link to="/Login" className="text-blue-500 font-semibold">
                                Return
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center rounded w-full mt-4">



                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword;