import { Suspense } from 'react';
import { Await, Link, useAsyncValue, useLoaderData, useNavigate } from 'react-router-dom';

const Post = () => {
  const post = useAsyncValue();
  return (
    <>
      <h4>
        {post.id} {post.title}
      </h4>
      <p>{post.body}</p>
    </>
  );
};

const Comments = () => {
  const comments = useAsyncValue();

  return (
    <>
      <h3 className='text-center'>Comments</h3>
      {comments.map((comment) => (
        <div key={comment.id}>
        <h6>{comment.email}</h6>
        <h5>{comment.name}</h5>
        <p>{comment.body}</p>
        </div>
      ))}
    </>
  );
};

const SinglePage = () => {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goHome = () => navigate('/', { replace: true });

  return (
    <div className='mt-4'>
      <Suspense fallback={<h2 className="text-center">Post is loading...</h2>}>
        <Await resolve={post}>
          <Post />
        </Await>
      </Suspense>
      <Suspense fallback={<h2 className="text-center">Comments are loading...</h2>}>
        <Await resolve={comments}>
          <Comments />
        </Await>
      </Suspense>
      <button className="btn btn-dark me-3" onClick={goBack}>
        Go Back
      </button>
      <Link to={`/posts/${id}/edit`} className="btn btn-success text-white me-3">
        Edit this post
      </Link>
      <button className="btn btn-dark" onClick={goHome}>
        Go back to Home
      </button>
    </div>
  );
};

async function getPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

async function getCommentsByPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return res.json();
}

const postLoader = async ({ params }) => {
  const id = params.id;
  return { post: await getPostById(id), id, comments: getCommentsByPost(id) };
};

export { SinglePage, postLoader };
