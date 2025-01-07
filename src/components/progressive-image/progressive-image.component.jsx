import PropTypes from "prop-types";

import { ResponsiveImage } from "../../styles/image/image.styles";

const ProgressiveImage = ({ image, altText }) => (
  <>
    <ResponsiveImage src={image} alt={altText} loading="lazy" />
  </>
);

ProgressiveImage.propTypes = {
  image: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
};

export default ProgressiveImage;
