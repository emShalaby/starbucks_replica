import {loadHeader} from './components/header/header.js';
import { loadFooter } from './components/footer/footer.js';
import {loadBanner} from './components/banner/banner.js';
import { loadStart } from './components/start/start.js';
import { loadExtras } from './components/extras/extras.js';
loadHeader('rewards');
loadBanner();
loadStart();
loadExtras();

loadFooter();