
import { Link, redirect, useNavigate, useNavigation } from 'react-router-dom'
import { useAuth } from '../hook/useAuth';
import NewPost from '../components/NewPost';

const CreatePost = () => {
	const navigate = useNavigate();
	const {signOut} = useAuth()
	const navigation = useNavigation()
	const goBack = () => navigate('/posts')
 
	return (
		<div>
			<h1>Create a post</h1>
			<NewPost submitting={navigation.state === 'submitting'} />
			<Link to='/' className='btn btn-dark me-3'>Home page</Link>
			<button onClick={goBack} className='btn btn-dark me-3'>Our News</button>
			<button onClick={() => signOut(() => navigate('/', {replace: true})) } className='btn btn-dark'>Log out</button>
		</div>
	)
}

const createPost = async ({title, body, userId}) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts',{
		method: "POST",
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify({title, body, userId})
	});
	const newPost = await res.json()

	return newPost
}

const createPostAction = async (request) => {
	const formData = await request.formData();
	const newPost = {
		title: formData.get('title'),
		body: formData.get('body'),
		userId: formData.get('userId')
	}
	const post = await createPost(newPost)

	return redirect('/posts/' + post.id)
}

export {CreatePost, createPostAction}
