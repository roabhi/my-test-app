/*
=============================
IMPORT NEEDED RUNTIME
============================
*/

import 'regenerator-runtime/runtime';

/*
=============================
IMPORT STYLES
============================
*/

import '../scss/styles.scss';


const msg = '   Hello world';

const init = e => {
    document.removeEventListener('DOMContentLoaded', init, false);

    document.getElementById('msg').innerHTML = msg.trimStart();

    console.info(msg);
}



document.addEventListener('DOMContentLoaded', init, false);