// import logo from './logo.svg';
// import './App.css';
import Header from './Header';
import Footer from './Footer';
import ColumnRight from './ColumnRight';
import SummaryTop from './SummaryTop';
import Overview from './Overview';
import Transportation from './Transportation';
import Schools from './Schools';
import PointsOfInterest from './PointsOfInterest';
import TopLocations from './TopLocations';
import Nearby from './Nearby';
import SummaryBottom from './SummaryBottom';

function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div class="mainWrapper ">

    <Header />

    <div id="localGuideOuterWrapper" class="localGuideOuterWrapper ">
        <section id="localGuideContentWrapper">
    
                <section class="hero" id="heroSection">
    
    
    
    
    
    
    <header class="heroImage" id="localGuideHeader">
        <div id="headingWrapper" class="headingWrapper">
            <h2>Blacksburg</h2>
    
        </div>
    
            <div class="videoWrapper videoPlayed">
                    {/* <img class="heroVideo" data-bgimg="/a/488f50/modules/localguide/content/images/hero/1920_local_guide_hero_2.jpg" src="/a/488f50/modules/localguide/content/images/hero/1920_local_guide_hero_2.jpg" alt="Background Image" style="width: 100%; display: block; object-fit: cover"></img> */}
            </div>
    </header>
                </section>
    
            <div class="localGuideGridContainer">
    
                <section id="localGuideColumnLeft" class="localGuideColumnLeft">
                        <SummaryTop />
    
                        <Overview />

                        <Transportation />
    
                        <Schools />

                        <PointsOfInterest />
    
                        <TopLocations />
    
                        <Nearby />
    
                        <SummaryBottom />
    
                </section>
    
                
                <aside class="localGuideColumnRight">
                    <ColumnRight />
                </aside>
            </div>
        </section>
    
    </div>
    
    <Footer />
        
    </div>
  );
}

export default App;
