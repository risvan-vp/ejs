# Express & EJS Practice Projects

Three small projects exploring server-rendered pages, form submissions, and Express routing.

| Folder | Focus | Start command | Port |
| --- | --- | --- | --- |
| contactform | Contact forms and an in-memory login exercise | node app.js | 3000 |
| ejs_express | Multi-page EJS site with shared partials | node server.js | 5000 |
| formtabletest | Add, view, edit, and delete form submissions | node server.js | 3000 |

## Run an example
Each folder is a separate application. For example:
```bash
cd formtabletest
npm install
node server.js
```
Open `http://localhost:3000`. Run the other examples from their own folders using the commands above. Stop one port-3000 example before starting the other.

## Stack
Node.js, Express, EJS, CSS, and form-body parsing.

## Scope
These are learning exercises. Form submissions and users are stored in memory and disappear when the server restarts. The contactform login exercise stores passwords in plain text and does not implement authenticated sessions; use dummy data only. It needs password hashing, session handling, and validation before real use.
