import { faRedRiver, faLinkedinIn, faInstagram, faFacebook} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../assets/home.css'
const SocialMediaIcons = () => (
  <div className='iconlist'>
    <a style={{ color: '#3b5998' }} href="#!" role="button">
      <FontAwesomeIcon icon={faRedRiver} size="lg" />
    </a>
    <a style={{ color: '#55acee' }} href="#!" role="button">
      <FontAwesomeIcon icon={ faLinkedinIn} size="lg" />
    </a>
    <a style={{ color: '#55acee' }} href="#!" role="button">
      <FontAwesomeIcon icon={ faInstagram} size="lg" />
    </a>
    <a style={{ color: '#55acee' }} href="#!" role="button">
      <FontAwesomeIcon icon={ faFacebook} size="lg" />
    </a>
  </div>
);

export default SocialMediaIcons;