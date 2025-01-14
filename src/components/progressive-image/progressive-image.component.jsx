import { ResponsiveImage } from "../../styles/image/image.styles";

const ProgressiveImage = ({ image, altText }) => (
  <>
    <ResponsiveImage src={image} alt={altText} loading="lazy" />
  </>
);

export default ProgressiveImage;
