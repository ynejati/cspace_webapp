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
      <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
        <nav className="mdl-navigation">
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
          <a className="mdl-navigation__link" href="">Link</a>
        </nav>
      </div>
    );
  }

}

export default Drawer;

