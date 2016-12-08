/**
 * Created by you on 12/5/16.
 */

import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Drawer.css';

class Drawer extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <div className={`${s.demoDrawer} mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-100`}
           ref={node => (this.root = node)}>
        <header className={s.demoDrawerHeader}>
          <img src="./collectionspace_drawer_logo.png" className={s.drawerLogo}/>
        </header>
        <nav className={`mdl-navigation mdl-color--blue-grey-800 ${s.demoNav}`}>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">home</i>Home</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">library_books</i>Collection</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">library_add</i>Acquisition</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">check_circle</i>Condition Check</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">account_balance</i>Exhibition</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">group_work</i>Group</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">input</i>Intake</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">call_received</i>Loan In</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">call_made</i>Loan Out</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">directions</i>Movement</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">image</i>Media Handling</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">launch</i>Object Exit</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">attach_money</i>Valuation Control</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">folder_shared</i>Citation</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">gesture</i>Concept</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">domain</i>Organization</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">people</i>Person</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">public</i>Place</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">storage</i>Storage Location</a>
          <a id={s.nav} className="mdl-navigation__link" href=""><i className={`${s.space20} mdl-color-text--white material-icons`}
                                                         role="presentation">info</i>About</a>
        </nav>
      </div>
    );
  }

}

export default Drawer;

