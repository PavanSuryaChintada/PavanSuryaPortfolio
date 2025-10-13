import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useLocation } from 'react-router-dom';
import ProfileSelector from '@/components/ProfileSelector';
import Home from './Home';
import Search from './Search';
import Library from './Library';
import Professional from './Professional';
import Skills from './Skills';
import Hire from './Hire';
import Contact from './Contact';
import DesktopLayout from '@/layouts/DesktopLayout';
import MobileLayout from '@/layouts/MobileLayout';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const { hasSelectedProfile } = useAppContext();
  const isMobile = useIsMobile();
  const location = useLocation();
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    if (hasSelectedProfile) {
      setShowApp(true);
    }
  }, [hasSelectedProfile]);

  if (!showApp) {
    return <ProfileSelector />;
  }

  const Layout = isMobile ? MobileLayout : DesktopLayout;

  // Route content based on path
  let content;
  switch (location.pathname) {
    case '/search':
      content = <Search />;
      break;
    case '/library':
      content = <Library />;
      break;
    case '/professional':
      content = <Professional />;
      break;
    case '/skills':
      content = <Skills />;
      break;
    case '/hire':
      content = <Hire />;
      break;
    case '/contact':
      content = <Contact />;
      break;
    case '/profile':
      content = <Home />; // Placeholder, can create Profile page later
      break;
    default:
      content = <Home />;
  }

  return (
    <Layout>
      {content}
    </Layout>
  );
};

export default Index;
