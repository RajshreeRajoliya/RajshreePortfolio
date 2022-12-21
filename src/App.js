
import {  useState } from "react";
import { useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import styled from 'styled-components';
import HomePage from "./Pages/HomePage";
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, Switch as Switching, useLocation } from "react-router-dom";
import Switch from '@material-ui/core/Switch'
import { IconButton } from "@material-ui/core";
import {AnimatePresence} from "framer-motion"
import "./App.css"
function App() {
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(true);
  const [navToggle, setNavToggle] = useState(false);
  const location = useLocation()
  useEffect(()=>{
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () =>{
    let temp = theme.split(" ")
    if(temp.length<2){
      if(temp[0] === 'light-theme'){
        setTheme('dark-theme');
        setChecked(false)
      }
      else{
        setTheme('light-theme');
        setChecked(true)
      }
    }
    else{
      if(temp[0] === 'light-theme'){
        setTheme("dark-theme" + " " +temp[1]);
        setChecked(false)
      }
      else{
        setTheme("light-theme" + " " + temp[1]);
        setChecked(true)
      }
    }
  }
  window.addEventListener("load",()=>{
    setTimeout(() => {
     setTimeout(() => {
      setLoading(false)
     }, 1500);
    }, 1000);
  })
  return (
    <>
   {loading && <><div className="hold">
<p aria-label="Loading">Welcome To My Portfolio...</p>
</div>
   </>
   }
   {loading?null:<> <div className="colors">
     
      <span onClick={()=>{
        setTheme(`${theme.split(" ")[0]} orange-theme`)
      }}></span>
   
      <span onClick={()=>{
        setTheme(`${theme.split(" ")[0]}`)
      }}></span>
    </div>
    <div className="App">
        <Sidebar navToggle={navToggle} setNavToggle={setNavToggle}/>

        <div className="theme" id="h">
          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon />
              </div>
              <div className="right-content">
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ 'aria-label': '' }}
                  size="medium"
                  onClick={themeToggler}
                  
                />
              </div>
            </div>
        </div>

        <div className="ham-burger-menu">
          <IconButton onClick={() => setNavToggle(!navToggle)}>
              <MenuIcon />
          </IconButton>
        </div>

        <MainContentStyled>
          
          <AnimatePresence>
          <Switching location={location} key={location.key}>
            <Route path="/" exact>
              <HomePage theme={theme}/>
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route path="/resume">
              <ResumePage />
            </Route>
            <Route path="/portfolios">
              <PortfoliosPage />
            </Route>
            <Route path="/blogs">
               <BlogsPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
          </Switching>
         </AnimatePresence>

        </MainContentStyled>
    </div></>}
    </>
  );
}

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  @media screen and (max-width:1200px){
    margin-left: 0;
  }
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;
