import './style.css'
import { renderNavbar, renderGalleryPage, renderFooter } from './renders/gallery.mjs'

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderGalleryPage()}
  ${renderFooter()}
`;
