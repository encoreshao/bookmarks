/// <reference types="chrome"/>
/* eslint-disable jsx-a11y/anchor-is-valid */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormContext } from "../contexts/FormContext";

function Settings() {
  const { formData, handleChange } = useFormContext();

  return (
    <>
      <div className="hero-body" style={{ alignItems: 'baseline' }}>
        <div className="container has-text-centered">
          <p className="title">Settings</p>
          <hr />
          <br />

          <div>
            <div className="field is-horizontal">
              <div className="field-label is-normal">
                <label className="label has-text-white"> Information </label>
              </div>
              <div className="field-body">
                <div className="field">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input" type="text" placeholder="Your name" name="username"
                      onChange={handleChange} value={formData.username}
                    />
                    <span className="icon is-small is-left">
                      <FontAwesomeIcon icon={faUser} />
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label"></div>
              <div className="field-body">
                <div className="field is-expanded">
                  <div className="field has-addons">
                    <p className="control">
                      <a className="button is-static">
                        <FontAwesomeIcon icon={faImage} fontSize="24"/>
                      </a>
                    </p>
                    <p className="control">
                      <a className="button is-static">
                        Background
                      </a>
                    </p>
                    <p className="control is-expanded">
                      <input
                        className="input" type="text" name="backgroundUrl" placeholder="The background image URL"
                        onChange={handleChange} value={formData.backgroundUrl}
                      />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-label">
                <label className="label has-text-white">  </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    <input
                      id="enabledGmail"
                      type="checkbox"
                      name="enabledGmail"
                      className="mr-2 switch is-rounded is-info"
                      onChange={handleChange}
                      checked={formData.enabledGmail}
                    />
                    <label htmlFor="enabledGmail" className="has-text-white mr-5">
                      Gmail
                    </label>
                    <input
                      id="enabledDownloads"
                      type="checkbox"
                      name="enabledDownloads"
                      className="mr-2 switch is-rounded is-info"
                      onChange={handleChange}
                      checked={formData.enabledDownloads}
                    />
                    <label htmlFor="enabledDownloads" className="has-text-white mr-5">
                      Downloads
                    </label>
                    <input
                      id="enabledExtensions"
                      type="checkbox"
                      name="enabledExtensions"
                      className="mr-2 switch is-rounded is-info"
                      onChange={handleChange}
                      checked={formData.enabledExtensions}
                    />
                    <label htmlFor="enabledExtensions" className="has-text-white mr-5">
                      Extensions
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {false &&<div className="field is-horizontal">
              <div className="field-label">
                <label className="label has-text-white"> Pinned Bookmarks </label>
              </div>
              <div className="field-body">
                <div className="field is-narrow">
                  <div className="control">
                    {formData.pinBookmarks.map((bookmarkId: string) => (
                      <label className="checkbox has-text-white mr-5">
                        <input
                          type="checkbox"
                          name="pinBookmarks"
                          className="mr-2"
                          checked={formData.pinBookmarks.includes(bookmarkId)}
                          value={bookmarkId}
                        />
                        {bookmarkId}
                      </label>
                    ))}

                    {formData.pinBookmarks.length === 0 && (
                      <p className="help has-text-white">No pinned bookmarks</p>
                    )}
                  </div>
                </div>
              </div>
            </div>}

          </div>
        </div>
      </div>

      <article className="message has-text-centered has-background-white has-text-black" style={{ marginBottom: '0px' }}>
        <div className="message-body">
          <p>
            <strong>Dashboard For Bookmarks</strong> by <a href="https://icmoc.com">Encore Shao</a>.

            If you have a idea? Please contact me (encore.shao[at]gmail.com).
          </p>
        </div>
      </article>
    </>
  );
}

export default Settings;
