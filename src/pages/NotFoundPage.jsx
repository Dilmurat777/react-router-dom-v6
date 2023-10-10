import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>
      <h1 className="d-flex align-items-center justify-content-center">This page doesn't exist.</h1>{' '}
      <div className='d-flex align-items-center justify-content-center mt-5'>
        <Link
          to="/"
          style={{ color: '#000' }}
          className="btn btn-danger text-white">
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
