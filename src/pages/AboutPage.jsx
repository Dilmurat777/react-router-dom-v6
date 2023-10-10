import { Link, Outlet } from "react-router-dom";


const AboutPage = () => {
	return (
		<div>
			<h1>About</h1>

			<Outlet/>
			<Link to='contacts' className="btn btn-dark me-3">Out contacts</Link>
			<Link to='team' className="btn btn-dark">Out team</Link>
			
		</div>
	);
};

export default AboutPage;
