import { Route, Navigate, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import {BlogPage, blogLoader} from './pages/BlogPage';
import {SinglePage, postLoader} from './pages/SinglePage';
import { EditPost } from './pages/EditPost';
import { CreatePost, createPostAction } from './pages/CreatePost';
import { Layout } from './components/Layout';
import LoginPage from './pages/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about/*" element={<AboutPage />}>
            <Route path='contacts' element={<p>Our contact</p>}/>
            <Route path='team' element={<p>Our team</p>}/>
          </Route>
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="posts" element={<BlogPage />} loader={blogLoader} errorElement={<ErrorPage/>}/>
          <Route path="posts/:id" element={<SinglePage />} loader={postLoader}/>
          <Route path="posts/:id/edit" element={<EditPost />} />
          <Route
            path="posts/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            } action={createPostAction}/>
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
  ))
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  );
}

export default App;
