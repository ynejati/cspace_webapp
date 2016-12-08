/**
 * Created by you on 12/5/16.
 */


import React from 'react';


// Pager START from: http://codepen.io/jfily/pen/RWYQgx
var MaterialSpeedDial = function() {};

// Add mouse event on element
MaterialSpeedDial.upgradeItem = function(item) {
  if (item instanceof Element && item.matches(".mdl-speed-dial") !== false) {
    if (item.firstElementChild !== null) {
      // On mouse enter
      item.firstElementChild.addEventListener("mouseenter", function(e) {
        item.classList.add("is-active");
      });
      // On mouse leave
      item.addEventListener("mouseleave", function(e) {
        item.classList.remove("is-active");
      });
    }
  }
};

// Add events on multiple elements
MaterialSpeedDial.upgradeItems = function(items) {
  for (var i = 0; i < items.length; i++) {
    MaterialSpeedDial.upgradeItem(items[i]);
  }
};

document.addEventListener("DOMContentLoaded", function() {

  // Upgrading speed dials
  var items = document.getElementsByClassName("mdl-speed-dial");
  MaterialSpeedDial.upgradeItems(items);

});
// Pager END



function Pager() {
  return (
    <div className="mdl-paging"><span className="mdl-paging__per-page"><span className="mdl-paging__per-page-label">Results per page: </span><span className="mdl-paging__per-page-value">10</span>
          <button id="HkhZcTBbWFADje7t2" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-paging__per-page-dropdown"><i className="material-icons">arrow_drop_down</i>
          </button>
          <ul htmlFor="HkhZcTBbWFADje7t2" className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect mdl-js-ripple-effect--ignore-events">
            <li tabIndex={-1} data-value={10} className="mdl-menu__item mdl-js-ripple-effect">10
            </li>
            <li tabIndex={-1} data-value={20} className="mdl-menu__item mdl-js-ripple-effect">20
            </li>
            <li tabIndex={-1} data-value={30} className="mdl-menu__item mdl-js-ripple-effect">30
            </li>
            <li tabIndex={-1} data-value={40} className="mdl-menu__item mdl-js-ripple-effect">40
            </li>
            <li tabIndex={-1} data-value={50} className="mdl-menu__item mdl-js-ripple-effect">50
            </li>
          </ul>
        </span><span className="mdl-paging__count">1-10 of 25</span>
      <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-paging__prev"><i className="material-icons">keyboard_arrow_left</i>
      </button>
      <button className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon mdl-paging__next"><i className="material-icons">keyboard_arrow_right</i>
      </button>
    </div>
  );
}

export default Pager;




