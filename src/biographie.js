import './style.css'
import { renderNavbar, renderBibliographie, renderFooter } from './renders/bio.mjs'

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderBibliographie()}
  ${renderFooter()}
`;
