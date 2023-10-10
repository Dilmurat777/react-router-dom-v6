import { useState } from "react";


const BlogFilter = ({setSearchParams, postQuery, latest}) => {
	const [search, setSearch] = useState(postQuery)
	const [checked, setChecked] = useState(latest)
	

	const handlerSubmit = (e) => {
		e.preventDefault()

		const form = e.target;
		const query = form.search.value;

		const isLatest = form.latest.checked;

		const params = {};
		if(query.length) params.post = query;
		if(isLatest) params.latest = true;
		setSearchParams(params)
	}
	return (
		<form autoComplete="off" onSubmit={handlerSubmit}>
			<input className="me-3" type="search" name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
			<label>
				<input className="me-3" type="checkbox" name="latest" checked={checked} onChange={(e) => setChecked(e.target.checked)}/>
			</label>
			<input type="submit" value="search" />
		</form>
	)
}

export default BlogFilter
