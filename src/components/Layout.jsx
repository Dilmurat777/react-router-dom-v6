import { Outlet } from 'react-router-dom';
import Container from './Container';
import CustomLink from './CustomLink';



const Layout = () => {
  return (
    <>
      <header>
        <CustomLink className='headerLink' to="/">Home</CustomLink>
        <CustomLink className='headerLink' to="/posts">Posts</CustomLink>
        <CustomLink className='headerLink' to="/about">About</CustomLink>
      </header>

      <Container>
        <Outlet />
      </Container>

      <Container>
        <footer>&copy; React Router Tutorials 2023</footer>
      </Container>
    </>
  );
};

export { Layout };
