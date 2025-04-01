import image from "../../assets/social-share.jpg";

const Metadata = ({ title, description, ogTitle, ogDescription }) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />

    {(ogTitle || ogDescription) && (
      <>
        <meta property="og:title" content={ogTitle || title} />
        <meta
          property="og:description"
          content={ogDescription || description}
        />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </>
    )}
  </>
);

export default Metadata;
