/**
 * Created by you on 12/5/16.
 */

import React from 'react';

class ResultObject extends React.Component {

  render() {
    return (
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
    );
  }
}

export default ResultObject;




