/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { faHome, faDownload, faGears, faMailBulk, faBookBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useFormContext } from '../contexts/FormContext';
import { useEffect, useState } from 'react';

interface NavItemProps {
  href?: string;
  icon: any;
  text: string;
  onClick?: (event: any) => void;
  isExternal: boolean;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon, text, onClick, isExternal, isActive }) => (
  <a
    className={`navbar-item ${isActive ? 'is-active' : ''}`}
    href={isExternal ? href : undefined}
    target={isExternal ? "_blank" : undefined}
    onClick={onClick}
    onMouseOver={(event) => event.currentTarget.classList.toggle('has-background-link')}
    onMouseOut={(event) => event.currentTarget.classList.toggle('has-background-link')}
  >
    <span className="icon">
      <FontAwesomeIcon icon={icon} color='white' />
    </span>
    <span className='has-text-white'> {text} </span>
  </a>
);

function HeroHeader(props: { tab: string }) {
  const { formData } = useFormContext();
  const [pageTitle, setPageTitle] = useState('');

  const openInternalLink = (eventName: string) => {
    if (chrome.runtime) { chrome.runtime.sendMessage({ action: eventName }) }
  }

  useEffect(() => {
    if (props.tab) {
      const currentTab = props.tab.charAt(0).toUpperCase() + formData.currentTab.slice(1)

      setPageTitle(currentTab);
    }
  }, [props.tab])

  const navItems = [
    { condition: true, href: "#", icon: faHome, text: "Home", isExternal: false, isActive: true },
    { condition: formData.enabledGmail, href: "https://mail.google.com/mail/u/0/#inbox", icon: faMailBulk, text: "Gmail", isExternal: true },
    { condition: formData.enabledDownloads, href: "#", icon: faDownload, text: "Downloads", onClick: () => openInternalLink('downloads'), isExternal: false },
    { condition: formData.enabledExtensions, href: "#", icon: faGears, text: "Extensions", onClick: () => openInternalLink('extensions'), isExternal: false },
  ];

  return (
    <div className="hero-head">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a
              className="navbar-item has-text-white"
              onMouseOver={(event) => event.currentTarget.classList.toggle('has-background-link') }
              onMouseOut={(event) => event.currentTarget.classList.toggle('has-background-link') }
            >
              <span style={{ marginTop: '-15px' }}>
                <FontAwesomeIcon fontSize='200' icon={faBookBookmark} />
              </span>
              <p className='title has-text-white ml-4'>{pageTitle}</p>
            </a>
            <span className="navbar-burger" data-target="navbarMenuHeroB">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>

          <div id="navbarMenuHeroB" className="navbar-menu">
            <div className="navbar-end has-background-primary-10">
              {navItems.filter(item => item.condition).map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeroHeader;
