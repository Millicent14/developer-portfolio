import Image from 'next/image';
import portfolio from '../public/portfolio.png';

const MyImage = (props) => {
  	return (
    	<Image
	      src={portfolio}
	      alt="Portfolio"
	      // width="150px"
	      // height="100px"
	      layout="responsive"
	  	/>
  	)
}

export default MyImage;