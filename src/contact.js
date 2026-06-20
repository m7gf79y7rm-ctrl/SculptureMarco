import './style.css'
import { renderNavbar, renderContactSection, renderFooter } from './renders/contact.mjs'

document.querySelector('#app').innerHTML = `
  ${renderNavbar()}
  ${renderContactSection()}
  ${renderFooter()}
`;
