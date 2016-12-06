import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import Pager from '../../components/Pager';
import s from './styles.css';
import {title, html} from './index.md';
import './material.css'
import log from './log';
import cspace from 'cspace-api';


const cs = cspace({
  url: 'http://localhost:9876/nightly.collectionspace.org:8180/cspace-services',
  username: 'admin@core.collectionspace.org',
  password: 'Administrator',
});


class HomePage extends React.Component {

  static propTypes = {
    // articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;

    document.querySelector('#p1').addEventListener('mdl-componentupgraded', function() {
      this.MaterialProgress.setProgress(44);
    });

    document.querySelector('#search').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        console.log(cs.read('collectionobjects/62eba826-cb66-4462-b16epri')
          .then(response => log('response', response))
          .catch(error => log('error', error)));
      }
    });

  }

  render() {
    return (
      <Layout className={s.content}>

        <div className={`mdl-card mdl-shadow--3dp ${s.searchcard}`}>
          <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">Collections Search</h2>
          </div>
          <div className="mdl-card__supporting-text">
            Search the collections found on the CollectionSpace demo server.
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <form action="#">
              <div className="mdl-textfield mdl-js-textfield">
                <label className="mdl-textfield__label" htmlFor="search">
                  <i className="material-icons">search</i>Search collections..
                </label>
                <input className="mdl-textfield__input" type="text" id="search"/>
              </div>
            </form>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            <div id="p1" className="mdl-progress mdl-js-progress"></div>
            <div className="mdl-grid">
              {/*Function that queries the demo server based upon the text input
              , producing 20 collectionobjects at a time*/}
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--8dp">CollectionObject 1</div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--8dp">CollectionObject 2</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 3</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 4</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 5</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 6</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 7</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 8</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 9</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 10</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 11</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 12</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 13</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 14</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 15</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 16</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 17</div>
              <div className="mdl-cell mdl-cell--4-col">CollectionObject 18</div>
              <div className="mdl-cell--stretch mdl-cell--4-col">CollectionObject 19</div>
              <div className="mdl-cell--stretch mdl-cell--4-col">CollectionObject 20</div>
            </div>
          </div>
        </div>
        <p>
          <br /><br />
        </p>
        {/*Get the results per page that is selected and the page number, using this to make rest call*/}
        <Pager/>
      </Layout>
    );
  }

}

export default HomePage;

/*
 <h4>Articles</h4>
 <ul>
 {this.props.articles.map((article, i) =>
 <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
 )}
 </ul>


 XMLHttpRequest cannot load http://nightly.collectionspace.org:8180/cspace-services/collectionobjects/62eba826-cb66-4462-b16e. Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:3000' is therefore not allowed access. The response had HTTP status code 403.
 */
