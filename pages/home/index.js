import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';
import {title, html} from './index.md';
import './material.css'


class HomePage extends React.Component {

  static propTypes = {
    // articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.homeCard} mdl-card mdl-shadow--3dp`}>
          <div className={`${s.homeCardTitle} mdl-card__title`}>
              <h1 className={`${s.homeCardTitleText} mdl-card__title-text`}>Welcome!</h1>
          </div>
          <div className="mdl-card__actions mdl-card--border">
          <div className="mdl-card__supporting-text">
            <div dangerouslySetInnerHTML={{__html: html}}/>
          </div>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="https://github.com/ynejati/cspace_webapp">
              View Source
            </a>
          </div>
        </div>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }
}

export default HomePage;
