import React, {PropTypes} from 'react';
import Layout from '../../components/Layout';
import Pager from '../../components/Pager';
import s from './styles.css';
import {title, html} from './index.md';
import './material.css'
import log from './log';
import cspace from 'cspace-api';


const cs = cspace({
  url: 'http://nightly.collectionspace.org:8180/cspace-services/collectionobjects',
  username: 'admin@core.collectionspace.org',
  password: 'Administrator',
});

class CollectionsPage extends React.Component {

  static propTypes = {
    // articles: PropTypes.array.isRequired,
  };

  componentDidMount() {

    componentHandler.upgradeDom();

    document.title = title;

    // document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
    //   this.MaterialProgress.setProgress(44);
    // });

    // document.querySelector('#search').addEventListener('keypress', function (e) {
    //   var key = e.which || e.keyCode;
    //   if (key === 13) {
    //     cs.read('')
    //       .then(response => log('response', response))
    //       .catch(error => log('error', error));
    //   }
    // });
  }

  componentDidUpdate() {
    componentHandler.upgradeDom();
  }

  render() {
    return (
      <Layout className={s.content}>
        <div className={`${s.searchCard} mdl-card mdl-shadow--3dp`}>
          <div className={`${s.cardTitle} mdl-card__title`}>
            <h1 className={`${s.mdlCardTitleText} mdl-card__title-text`}>Collection</h1>
          </div>
          <div className="mdl-card__supporting-text">
            Search the collections found on the core CollectionSpace demo server using the search box below.
          </div>
          <div className="mdl-card__menu">
            <button className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
              <i className={`${s.shareIcon} material-icons`}>share</i>
            </button>
          </div>
          <div className={s.searchContainer}>
            <form action="/">
              <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input className="mdl-textfield__input" type="text" id="search"/>
                <label className="mdl-textfield__label" htmlFor="search">
                  <i className={`material-icons ${s.md18}`}>search</i> Search collections...
                </label>
              </div>
            </form>
          </div>
          <div className="mdl-card__actions mdl-card--border">
            {/*<div id="p1" className="mdl-progress mdl-js-progress"></div>*/}
            <div className="mdl-grid">
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mdl-cell mdl-cell--4-col mdl-shadow--4dp">
                <div className={`${s.width} mdl-card`}>
                  <div className={`${s.thumbContainer} mdl-card__title`}>
                    <img src="./MaskOfAgamemnon.gif" className={`${s.thumb} mdl-shadow--16dp`} alt="Mask Of Agamemnon"/>
                  </div>
                  <div className="mdl-card__actions mdl-card--border">
                    <table className={`${s.summaryTable} mdl-card__supporting-text mdl-shadow--16dp`}>
                      <tbody>
                      <tr>
                        <td className={s.textTitleCell}><b>Object #:</b></td>
                        <td className={s.textContentCell}>CO.12345</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Title:</b></td>
                        <td className={s.textContentCell}>Mask Of Agamemnon</td>
                      </tr>
                      <tr>
                        <td className={s.textTitleCell}><b>Location:</b></td>
                        <td className={s.textContentCell}>National Archaeological
                          Museum,
                          Athens
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${s.margin15L} mdl-card--border mdl-card__actions`}>
            {/*Get the results per page that is selected and the page number, using this to make rest call*/}
            <Pager/>
          </div>
        </div>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default CollectionsPage;
