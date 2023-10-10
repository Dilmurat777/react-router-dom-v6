import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>{error.status}</h1>
        <h3 className='text-center'>{error.data.message}</h3>
        <h4 className='text-center'>{error.data.reason}</h4>
      </div>
    );
  }
	throw error
};

export default ErrorPage;
