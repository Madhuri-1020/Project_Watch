// import Header from "./Components/Header";
import Banner from "./Components/Banner";
// import Dhf from "./Components/Dhf";
// import ImageSlider from "./Components/ImageSlider";
import Navbar from "./Components/Navbar";
// import Hooks from "./Components/Hooks";
// import BasicExample from "./Components/BasicExaple";
import Features from "./Components/Features";
import VRsection from "./Components/VRsection";
import VRproducts from "./Components/VRproducts";
import Imgambass from "./Components/Imgambass";
import Plancards from "./Components/Plancards";
import VRmoving from "./Components/VRmoving";
import Watches from "./Components/Wtaches";
import Appachievs from "./Components/Appachievs";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Banner/> */}
      {/* <Dhf/> */}
      {/* <ImageSlider/> */}
      {/* <Dhf/> */}
      <Navbar/>
      <Banner/>
      <Features/>
      <VRsection/>
      <VRproducts/>
      <Imgambass/>
      <Plancards/>
      <VRmoving/>
      <Watches/>
      <Appachievs/>
      <Footer/>
      {/* <BasicExample/> */}
      {/* <Hooks/> */}
    </div>
  );
}

export default App;
