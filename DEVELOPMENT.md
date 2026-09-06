# Development and security checks

Use Node.js 24.15 or later in the Node 24 line (Node 26 is also supported).

Run `npm ci`, then `npm start` to open the Vite development server on port 3003.
`npm test` runs the catalogue loading and error-state tests once. The tests mock
the GraphQL request, so they do not depend on the external catalogue service.
`npm run test:watch` enables watch mode. `npm run build` creates the deployable
site in `build/`, and `npm run preview` serves it locally.

Vite and Vitest replace Create React App and its vulnerable build dependencies.
JSX files use `.jsx`; `index.html` is the entry point at the repository root and
static assets remain in `public/`. Build settings live in `vite.config.mjs`.
Vite's explicit `es2020` target replaces CRA's Browserslist-driven transpilation;
test any required legacy browser support before deploying. CRA-specific `eject`,
`PUBLIC_URL`, `REACT_APP_*`, and Jest CLI options are not supported. Configure Vite
`base` for subpath hosting, and use `import.meta.env.VITE_*` for future public
environment variables. The current app has no such variables to migrate.

GitHub Actions runs tests, builds, and npm audit for dependency PRs. Dependabot
checks weekly for routine updates and groups security updates when patches become
available. These changes do not enable automatic merging or deployment.
