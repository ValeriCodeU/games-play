import useForm from "../../hooks/useForm";

const LogintFormKeys = {
    Email: 'email',
    Password: 'password'
}

export default function Login({
    loginSubmitHandler,
}) {

    const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
        [LogintFormKeys.Email]: '',
        [LogintFormKeys.Password]: '',
    });

    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name={LogintFormKeys.Email}
                        placeholder="Sokka@gmail.com"
                        onChange={onChange}
                        value={values[LogintFormKeys.Email]}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input
                        type="password"
                        id="login-password"
                        name={LogintFormKeys.Password}
                        onChange={onChange}
                        value={values[LogintFormKeys.Password]}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don&apos;t have profile click <a href="#">here</a></span>
                    </p>
                </div>
            </form>
        </section>
    );
}