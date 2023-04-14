import Image from 'next/image';
import ecommerce from '../public/e-commerce.png';

const MyImage1 = (props) => {
  	return (
    	<Image
	      src={ecommerce}
	      alt="Ecommerce"
	      // width="150px"
	      // height="100px"
	      layout="responsive"
	  	/>
  	)
}

export default MyImage1;