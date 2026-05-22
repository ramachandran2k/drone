# Megan Static Website

Cleaned project structure for the purchased Megan HTML template.

## Structure

```text
megan-structured/
  index.html
  pages/
    page-about.html
    page-contact.html
    service-details.html
    shop.html
    ...
  assets/
    css/
      style.css
      vendor/
      plugins/
    js/
      main.js
      vendor/
      plugins/
    img/
    fonts/
      roboto/
    revolution/
```

## Editing Guide

- Keep the main home page at `index.html`.
- Keep all other HTML pages inside `pages/`.
- From `index.html`, asset paths should start with `assets/`.
- From files inside `pages/`, asset paths should start with `../assets/`.
- Common template behavior lives in `assets/js/main.js`.
- Main styling lives in `assets/css/style.css`.

This project is plain static HTML/CSS/JS, so it can be opened directly in a browser or served with any static web server.
