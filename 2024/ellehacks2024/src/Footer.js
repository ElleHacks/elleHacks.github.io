import React from "react";
import Red from "./images/Red.png";
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
                                  <img className="social-icons" src="/socials/ic_round-email.png" alt="email" />
                                </a>
                                <a href="https://www.instagram.com/ellehacks/">
                                  <img className="social-icons" src="/socials/instagram.png" alt="instagram" />
                                </a>
                                <a href="https://www.tiktok.com/@ellehacks">
                                  <img className="social-icons" src="/socials/logos_tiktok-icon.png" alt="tiktok" />
                                </a>
                                <a href="https://www.linkedin.com/company/ellehacks/">
                                  <img className="social-icons" src="/socials/linkedin.png" alt="linkedin" />
                                </a>
                                <a href="https://twitter.com/ellehacks">
                                  <img className="social-icons" src="/socials/twitter.png" alt="twitter" />
                                </a>
                                <a href="https://www.facebook.com/ellehacks/">
                                  <img className="social-icons" src="/socials/facebook.png" alt="facebook" />
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
