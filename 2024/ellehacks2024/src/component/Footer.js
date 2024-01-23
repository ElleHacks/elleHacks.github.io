import React from "react";
import Red from "../images/Red.png";
import facebook from "../images/socials/facebook.png";
import icRoundEmail from "../images/socials/ic_round-email.png";
import logostiktokicon from "../images/socials/logos_tiktok-icon.png";
import linkedin from "../images/socials/linkedin.png";
import twitter from "../images/socials/twitter.png";
import instagram from "../images/socials/instagram.png";


import {
  Box,
  FooterContainer,
  Row,
  Column,
  FooterLink,
  SocialIconsContainer,
  ContactSection,
  ContactLink,
  Logo,
  ColumnSocial,
  RowSocial,
} from "./FooterStyles";

const Footer = () => {
	return (
		<Box>


			<FooterContainer>


				<Row>
				{/* Logo */}
                    < Logo img src={Red} alt="Logo" />

					<Column>
						<FooterLink href="#">
							Home
						</FooterLink>
						<FooterLink href="#">
							About
						</FooterLink>
						<FooterLink href="#">
							Register
						</FooterLink>
					</Column>

					<Column>
						<FooterLink href="#">
							Sponsors
						</FooterLink>
						<FooterLink href="#">
							FAQ
						</FooterLink>
						<FooterLink href="#">
							Contact
						</FooterLink>

					</Column>


					<ColumnSocial>

                    <RowSocial>
					 {/* Social media icons directly in Footer.js */}
					 <SocialIconsContainer>
                              <div id="contact-socials" className="socials">
                                <a href="mailto::info@ellehacks.com">
                                  <img className="social-icons" src={icRoundEmail} alt="email" />
                                </a>
                                <a href="https://www.instagram.com/ellehacks/">
                                  <img className="social-icons" src={instagram} alt="instagram" />
                                </a>
                                <a href="https://www.tiktok.com/@ellehacks">
                                  <img className="social-icons" src={logostiktokicon} alt="tiktok" />
                                </a>
                                <a href="https://www.linkedin.com/company/ellehacks/">
                                  <img className="social-icons" src={linkedin} alt="linkedin" />
                                </a>
                                <a href="https://twitter.com/ellehacks">
                                  <img className="social-icons" src={twitter} alt="twitter" />
                                </a>
                                <a href="https://www.facebook.com/ellehacks/">
                                  <img className="social-icons" src={facebook} alt="facebook" />
                                </a>
                              </div>
                     </SocialIconsContainer>
                     </RowSocial>

                            <RowSocial>
                     {/* Contact section */}
                               <ContactSection>
                                 <div className="container-fluid" id="contact-us">
                                   <p>
                                     Questions? Contact us at{" "}
                                     <ContactLink href="mailto:info@ellehacks.com">info@ellehacks.com</ContactLink>
                                   </p>
                                 </div>
                               </ContactSection>


                           </RowSocial>

                     </ColumnSocial>




				</Row>

			</FooterContainer>
		</Box>

	);
};
export default Footer;
