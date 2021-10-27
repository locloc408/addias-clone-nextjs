import StarHalfIcon from "@mui/icons-material/StarHalf";
import Link from "../../../src/Link";
import Image from "next/image";
import { LogoContainer, BrandName, LinkStyle } from "../navbarStyle";
export const Logo = () => {
  return (
    <LogoContainer>
      <div style={{ textDecoration: "none" }}>
        <LinkStyle href="/">
          <div style={{ position: "relative", height: 90, width: 80 }}>
            <Image src="/adidas.svg" layout="fill" />
          </div>
        </LinkStyle>
      </div>
    </LogoContainer>
  );
};
