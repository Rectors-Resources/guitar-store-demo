import './sign-in.css'



export default function SignIn () {
    return (
        <>
            <form action="" className="sign-in-form">
                <label htmlFor="username">User-name:</label>
                <br />
                <input type="text" />
                <br />
                <label htmlFor="password">Password:</label>
                <br />
                <input type="password" />
                <br />
                <input type="button" value="Submit" />
            </form>
        </>
    )
}