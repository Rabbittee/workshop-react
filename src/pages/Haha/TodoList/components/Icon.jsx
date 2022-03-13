import Icon from '../utils/Icon.js';

function Img({ logo, size }) {
  return <img src={Icon[logo]} alt="logo" width={size} height={size} />;
}

export default Img;
