/**
 * Post-build prerender: injects static HTML into each dist/*.html file
 * so crawlers see full content without executing JS.
 *
 * Run after `vite build` — the dist/ HTML files must already exist.
 * Each page's render functions are pure string generators (no DOM/window),
 * so they work in Node.js without any headless-browser dependency.
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { renderNavbar as navHome, renderHomepage, renderFooter as footHome } from '../src/renders/home.mjs';
import { renderNavbar as navBio, renderBibliographie, renderFooter as footBio } from '../src/renders/bio.mjs';
import { renderNavbar as navContact, renderContactSection, renderFooter as footContact } from '../src/renders/contact.mjs';
import { renderNavbar as navGallery, renderGalleryPage, renderFooter as footGallery } from '../src/renders/gallery.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const pages = [
  {
    file: join(root, 'dist/index.html'),
    html: `${navHome()}${renderHomepage()}${footHome()}`,
  },
  {
    file: join(root, 'dist/biographie.html'),
    html: `${navBio()}${renderBibliographie()}${footBio()}`,
  },
  {
    file: join(root, 'dist/contact.html'),
    html: `${navContact()}${renderContactSection()}${footContact()}`,
  },
  {
    file: join(root, 'dist/galerie.html'),
    html: `${navGallery()}${renderGalleryPage()}${footGallery()}`,
  },
];

for (const { file, html } of pages) {
  const source = readFileSync(file, 'utf8');
  const updated = source.replace('<div id="app"></div>', `<div id="app">${html}</div>`);
  if (updated === source) {
    console.warn(`⚠  No <div id="app"></div> placeholder found in ${file}`);
    continue;
  }
  writeFileSync(file, updated, 'utf8');
  console.log(`✓  Prerendered: ${file}`);
}
