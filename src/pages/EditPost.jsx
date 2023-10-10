import { useNavigate, useParams } from "react-router-dom"

const EditPost = () => {
	const {id} = useParams()
	const navigate = useNavigate()
	const goBack = () => navigate(-1)
	const goHome = () => navigate('/', {replace: true})
	return (
		<div>
			<h1>Edit Post {id}</h1>
			<button className='btn btn-primary me-3' onClick={goBack}>Go Back</button>
      <button className='btn btn-info text-white' onClick={goHome}>Go back to Home</button>
		</div>
	)
}

export {EditPost}
