import { Await, Link, json, useLoaderData, useSearchParams } from 'react-router-dom';
import BlogFilter from '../components/BlogFilter';
import { Suspense } from 'react';

const BlogPage = () => {
  const { posts } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');
  const startFrom = latest ? 80 : 1;

  return (
    <div>
      <h1>Our news</h1>
      <BlogFilter setSearchParams={setSearchParams} postQuery={postQuery} latest={latest} />
      <Link to="/posts/new" className="btn btn-success">
        Add new post
      </Link>
      <Suspense fallback={<h2 className="text-center">Loading...</h2>}>
        <Await resolve={posts}>
          {(resolvePosts) => (
            <>
              {resolvePosts
                .filter((post) => post.title.includes(postQuery) && post.id >= startFrom)
                .map((post) => (
                  <Link to={`/posts/${post.id}`} key={post.id}>
                    <li className="text-primary">
                      {post.id} <strong className="text-secondary">{post.title}</strong>
                    </li>
                  </Link>
                ))}
            </>
          )}
        </Await>
      </Suspense>
    </div>
  );
};

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}


const blogLoader = async () => {
  const posts = await getPosts()
  if(!posts.length) {
    throw json({message: 'Not Found Page!!!', reason: 'Wrong Url'}, {status: 404})
  }
  return {
    posts
  };
};

export { BlogPage, blogLoader };
