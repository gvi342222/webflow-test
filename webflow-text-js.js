(function () { constversion = Date.now(); document.querySelectorAll('[data-cache-bust]').forEach(el => { constattr = el.tagName === 'LINK' ? 'href' : 'src'; consturl = el.getAttribute(attr); if (!url) return; constseparator = url.includes('?') ? '&' : '?'; el.setAttribute(attr, `${url}${separator}v=${version}`); }); })();

import slick from 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js';
import fancybox from 'https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js';


Fancybox.bind("[data-fancybox]", {});
