import { useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../hook/useAuth";

const LoginPage = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const {signIn} = useAuth()

	const formPage = location.state?.form?.pathname || '/';

	const handlerSubmit = (e) => {
		e.preventDefault();
		const form = e.target;
		const user = form.username.value;

		signIn(user, () => navigate(formPage, {replace: true}))
	}

	return (
		<div>
			<h1>Login Page</h1>
			<form onSubmit={handlerSubmit}>
				<label>
					<input type="text" name="username" placeholder="enter name" />
				</label>
				<button type="submit" className="btn btn-dark">Log in</button>
			</form>
		</div>
	)
}

export default LoginPage
