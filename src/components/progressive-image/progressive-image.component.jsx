import { useImage } from "react-image";

import { ResponsiveImage } from "../../styles/image/image.styles";
import { ImageWrapper } from "../../styles/div/div.styles";

const ProgressiveImage = ({ srcList, altText, className }) => {
  const { src } = useImage({
    srcList,
  });

  return (
    <ImageWrapper>
      <a
        href={src}
        target="_blank"
        rel="noreferrer"
        aria-label="View full-size image"
      >
        <ResponsiveImage src={src} alt={altText} className={className} />
      </a>
    </ImageWrapper>
  );
};

export default ProgressiveImage;
