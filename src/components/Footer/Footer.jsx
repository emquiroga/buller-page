import React from "react";
import { StyledFooter, StyledFooterText } from "./style";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterText>
        © 1999 - 2021 Todos los derechos reservados
      </StyledFooterText>
      <StyledFooterText>| BEBER CON MODERACIÓN |</StyledFooterText>
      <StyledFooterText>
        Prohibida la venta a menores de 18 años.
      </StyledFooterText>
    </StyledFooter>
  );
};

export default Footer;
