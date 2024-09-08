import { useFormContext } from "../contexts/FormContext";
import { setStorage } from "../utils";

/* eslint-disable jsx-a11y/anchor-is-valid */
function HeroFooter(props: { setTab: (arg0: string) => void; tab: string }) {
  const { formData } = useFormContext();

  const handleClick = (whichTab: string) => {
    setStorage({ 'currentTab': whichTab }, () => {
      props.setTab(whichTab)
      formData.currentTab = whichTab;
    });
  };

  return (
    <>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth has-background-primary-100">
          <div className="container">
            <ul>
              <li
                onClick={() => handleClick('bookmarks')}
                className={props.tab === 'bookmarks' ? 'is-active' : ''}
              >
                <a> Bookmarks </a>
              </li>
              <li
                onClick={() => handleClick('settings')}
                className={props.tab === 'settings' ? 'is-active' : ''}
              >
                <a> Settings </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeroFooter;
