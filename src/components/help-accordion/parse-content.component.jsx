import { StyledLink } from "../../styles/link/link.styles";

/**
 * parseContent takes a string of text that may contain placeholders in the format
 * [link:text|route] and replaces them with clickable links using the StyledLink component.
 *
 * - It splits the string into parts, identifying placeholders and regular text.
 * - For each placeholder, it extracts the link text and route, and renders them as a StyledLink.
 * - Non-placeholder text remains as regular text.
 */
const parseContent = (content) => {
  const parts = content.split(/(\[link:.*?\])/); // matches any placeholder that starts with [link: and ends with ]
  return parts.map((part, index) => {
    const match = part.match(/\[link:(.*?)\|(.*?)\]/); // Extract link text and route
    if (match) {
      const [, text, route] = match;
      return (
        <StyledLink key={index} to={route}>
          {text}
        </StyledLink>
      );
    }
    return part; // Return plain text for non-matching parts
  });
};

export default parseContent;
