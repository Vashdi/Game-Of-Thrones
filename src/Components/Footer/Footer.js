import { memo } from "react";
import { FooterContainer, MoreButton } from "../Styles/styles";

const Footer = ({ disabled, handleOnClickShowMore }) => {
  return (
    <FooterContainer>
      <MoreButton
        disable={disabled}
        data-testid="footer"
        onClick={handleOnClickShowMore}
      >
        More
      </MoreButton>
    </FooterContainer>
  );
};

export default memo(Footer);
