import React from 'react'
import { FooterContainer, FooterContent, Brand, FooterText, FooterLinks, FooterLink } from '../styles/FooterElements'

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer className="print-hidden">
      <FooterContent>
        <div>
            <Brand>Digital CV</Brand>
            <FooterText>© {new Date().getFullYear()} Developed by VaLto.</FooterText>
        </div>
        
        <FooterLinks>
            <FooterLink onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Back to Top</FooterLink>
            <FooterLink href="https://github.com/valeriarnaudov/digital-cv" target="_blank" rel="noreferrer">GitHub Repo</FooterLink>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}

export default Footer
