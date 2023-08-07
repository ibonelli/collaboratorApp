# collaboratorApp

POC for a collaborator Application (Express-Objection-React).
More details @ <Nextcloud>/weKnow/Tools/CollaboratorsApp.md

## Backend Express

```
cd backend
```

To initialize the DB:

```
npm install knex -g
knex migrate:latest
knex seed:make collaborator
```

To run locally: ```npm start```

Local SQLite checking: ```sudo apt install sqlitebrowser```

Using: objection+knex, sqlite3, express+morgan+cors
Status: Initial working version.

## Frontend

### v1 (Create React App -- aka CRA)

```
cd frontend
```

Using: react-router-dom, mui/material, emotion & mui/x-data-grid (among other things).
Status: Initial working version.

### Frontend v2 (Next)

```
cd frontend-next
```

Using: react, react-dom, next, eslint & eslint-config-next.
	Plus it is using the components styled with Bootstrap: react-bootstrap & bootstrap
Status: Could not make it properly work.
	No pude hacer la tabla de manera dinámica con Bootstrap.

### Frontend v3 (Next)

```
cd frontend-next-mui
```

Using: next, mui/material, emotion/react & mui/x-data-grid
Status: Only started, did not get to make it work.

ToDo:
- Ideally migrate v1 work into v3 current shell.
- En cualquier caso los 3 intentos son SUPER pesados.

### Frontend v4 (Next)

Moving to a Vite/FE, with a NEST/BE, integrated with Turbo.

See more at [gitHub CollaboratorApp v2 repo @ github](https://github.com/ibonelli/CollaboratorAppV2)
