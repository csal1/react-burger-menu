import { faRedRiver, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/home.css'
const SocialMediaIcons = () => (
  <div className='iconlist'>
    <a style={{ color: '#3b5998' }} href="#!" role="button">
      <FontAwesomeIcon icon={faRedRiver} size="lg" />
    </a>
    <a style={{ color: '#55acee' }} href="https://www.linkedin.com/in/cajsa-lindekrans/" role="button" target="_blank">
      <FontAwesomeIcon icon={ faLinkedinIn} size="lg" />
    </a>
    <a style={{ color: '#55acee' }} href="#!" role="button">
      <FontAwesomeIcon icon={ faInstagram} size="lg" />
    </a>
 
  </div>
);

export default SocialMediaIcons;