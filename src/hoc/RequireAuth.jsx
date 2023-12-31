import { useLocation, Navigate } from "react-router-dom"
import { useAuth } from "../hook/useAuth";

const RequireAuth = ({children}) => {
	const location = useLocation()
	const {user} = useAuth(false);

	if(!user) {
		return <Navigate to='/login' state={{form: location}}/>
	}
	return children

}

export default RequireAuth
