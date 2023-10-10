import { Form } from "react-router-dom"

const NewPost = ({submitting}) => {
	return (
		<Form action="/post/new" method="post" className="d-flex  flex-column justify-items-center align-items-center gap-3">
			<label>
				Title:
				<input type="text" name='title' />
			</label>
			<label>
				Body:
				<input autoComplete="off" type="text" name='body' />
			</label>
			<input type="hidden" name="userId" value='1' />
			<input type="submit" value='Add post' className="btn btn-info w-25 mb-3" disabled={submitting}/>
		</Form>
	)
}

export default NewPost
