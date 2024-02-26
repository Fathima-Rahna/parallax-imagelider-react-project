



import Navbar from './component/Navbar';
import ImageOne from './component/ImageOne';
import ImageThree from './component/ImageThree';


import ImageTwo from './component/ImageTwo';
import SliderImages from './component/SliderImages';
import TextBox from './component/TextBox';
import Footer from './component/Footer';



function App() {



  return (
    <div>
      <Navbar />
        <SliderImages />
        <TextBox />
      <ImageOne />
      {/* <TextBox /> */}
      <ImageTwo />
      {/* <TextBox /> */}
      <ImageThree />
      <Footer/>
    
      

    </div>
  )
}

export default App;
