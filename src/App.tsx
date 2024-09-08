/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';

import HeroHeader from './components/Header';

import Settings from './components/Settings';
import Bookmarks from './components/bookmarks/Index';
import { getStorage } from './utils';
import HeroFooter from './components/Footer';

function App() {
  const [tab, setTab] = useState('');
  const [backgroundUrl, setBackgroundUrl] = useState('');

  useEffect(() => {
    getStorage(["currentTab", "backgroundUrl"], result => {
      setTab(result.currentTab || 'bookmarks');
      result.backgroundUrl && setBackgroundUrl(result.backgroundUrl);
    });
  }, []);

  return (
    <section
      className="hero is-info is-fullheight"
      style={
        backgroundUrl ? {
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          background: `linear-gradient(rgba(31, 44, 108, 0.65), rgba(31, 44, 108, 0.65)), rgba(0, 0, 0, 0.55) url("${backgroundUrl}") no-repeat`
        } : {}
      }
    >
      <HeroHeader tab={tab}/>

      {tab === 'bookmarks' && <Bookmarks />}
      {tab === 'settings' && <Settings />}

      <HeroFooter setTab={setTab} tab={tab} />
    </section>
  );
}

export default App;
