import { Parallax } from 'react-parallax';
import nasa from '../images/nasa.jpg';


const  ImageThree = () => (
    <Parallax className='image' bgImage={nasa}  strength={800}>
      <div className='content'>
        <span className='img-ser'>ViewSpace is produced by the Office of Public Outreach at the Space Telescope Science Institute ,
         in partnership with the NASA's Universe of Learning project
         and NASA's Earth Observing System, Hubble Space Telescope Project, and James Webb Space Telescope Project.<br></br>

ViewSpace has been exhibited in museums, planetariums, and science centers across the country since 2000.</span>
      </div>


    </Parallax>
);

export default ImageThree;