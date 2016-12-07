/**
 * Created by you on 12/5/16.
 */



/**
 * Retrieve an object record by CSID.
 */

import cspace from '/node_modules/cspace-api/src/cspace';
import log from './log';

const cs = cspace({
  url: 'http://core.collectionspace.org/cspace-services',
  username: 'admin@core.collectionspace.org',
  password: 'Administrator',
});

cs.read('collectionobjects?pgSz=50')
  .then(response => log('response', response))
  .catch(error => log('error', error));
