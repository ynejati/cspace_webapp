
import React from 'react';
import Navigation from './Navigation';
import Link from '../Link';
import s from './Header.css';

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
        <header className={`${s.mdlLayoutHeader} mdl-layout__header mdl-layout__header--transparent`} ref={node => (this.root = node)}>
          <div className={`mdl-layout__header-row ${s.row}`}>
            <Link className={`mdl-layout-title ${s.title}`} to="/">
              <img src="collectionspace_logo.png" alt="CollectionSpace Logo"/>
            </Link>
            <div className="mdl-layout-spacer"></div>
            <Navigation />
          </div>
        </header>
    );
  }

}

export default Header;
