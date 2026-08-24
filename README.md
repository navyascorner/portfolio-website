# Portfolio Website

Please check out my projects at [Project Portfolio](https://navyascorner.github.io/portfolio-website/).

## About the code

- `index.html` loads the box that hosts `main.jsx` which is the entry point for the website code.
- it uses the guitar emoji from `public/favicon.svg` as the icon. (it is chic to leave the 1st alphabet of a sentence lowercase)
- `main.jsx` is the entry point. It loads `index.css`, which will inject styling and pulls component definitions from `App.jsx` (Vite omits .jsx).
- `app.jsx` is the router. It decides which page renders for each URL (`#/` - Home, `#/projects` - Projects, `#/projects/:id` - a single project, anything else - home) and mounts the scroll-reset and custom cursor globally.