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
    document.title = title;

    // document.querySelector('#p1').addEventListener('mdl-componentupgraded', function () {
    //   this.MaterialProgress.setProgress(44);
    // });

    document.querySelector('#search').addEventListener('keypress', function (e) {
      var key = e.which || e.keyCode;
      if (key === 13) {
        cs.read('')
          .then(response => log('response', response))
          .catch(error => log('error', error));
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
            <div className={s.searchContainer}>
              <table className={`${s.searchBar} mdl-data-table`}>
                <tbody>
                <tr>
                  <td className="mdl-data-table__cell--non-numeric">
                    <form action="/">
                      <div className="mdl-textfield mdl-js-textfield">
                        <label className="mdl-textfield__label" htmlFor="search">
                          <i className="material-icons">search</i>Search collections..
                        </label>
                        <input className="mdl-textfield__input" type="text" id="search"/>
                      </div>
                    </form>
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
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

export default CollectionsPage;
