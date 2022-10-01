import About from "./About";
import Installation from "./Installation";
import Projects from "./Projects";
import Production from "./Production";
import "./css/Layout.css"
import image from "../components/images/PathFrameLogo.JPG"
import Home from "./Home"
import Blogs from "../pages/Blogs"
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const Layout = () => {

  return (
    <div className="Layout">


      <Tabs isLazy  >

        <TabList >


          <div className="image">
            <img className="PathFrameLogo" src={image} alt="Girl in a jacket" />
          </div>

          <Tab className="tabs"> Home </Tab>
          <Tab className="tabs">About</Tab>
          <Tab className="tabs">Installation</Tab>
          <Tab className="tabs">Production</Tab>
          <Tab className="tabs">Projects</Tab>
          <Tab className="tabs">Blogs</Tab>

        </TabList>

        <TabPanels>
          <TabPanel>
            <Home />
          </TabPanel>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Installation />
          </TabPanel>
          <TabPanel>
            <Production />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
          <TabPanel>
            <Blogs />
          </TabPanel>



        </TabPanels>
      </Tabs>
    </div>

  )
};

export default Layout;