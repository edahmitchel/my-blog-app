import "./App.css";
import MainBlogPage from "./pages/MainBlogPage";
import LandingPage from "./pages/LandingPage";
import CssBaseline from '@mui/material/CssBaseline';
import MainRoutes from "./routes/MainRoutes";



function App() {
  return (
    <>
     <CssBaseline />
<MainRoutes/>
    {/* <LandingPage/> */}
  {/* <MainBlogPage/> */}
       </>
  );
}

export default App;
