
import Contact from "./contactpage";
import "./home.css";
import Info from "./informationpage";
import Search from "./searchpage";
import Support from "./supportpage";
import FakeApp from "./fakeflightapi";
function Home() {
    return (
        <> 

      <div className='home container flex'>
        <div className='maintext'>
          <h1>Create Ever-Lasting Memories With Us</h1>
        </div>
        <div className='imgDiv'>
          <img src='https://cdn.mos.cms.futurecdn.net/VHf9HZ4DWkFC4LeAhVBS4h-1200-80.jpg' alt='Plane flying above the clouds' style={{height:300}} />
        </div>
      </div>,
      <FakeApp/>
      <Support/>
      <Search/>
      <Info/>
      <Contact/>
     
     
      </>
    );
  }
  
  export default Home;
  