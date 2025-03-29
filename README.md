# vestedshares

Project consists of two modules:

## Frontend
Frontend part is built with react framework, contains a single page with one table displaying results from the api GET call.
Potential extensions:
- DONE: extract fetch method to separate service, not in the App file
- DONE: extract table to separate component
- DONE: extract row entry to reusable component that could be used accross numerous other tables
- make row and table components more generic
- consider introducing axios approach instead of fetch
- introduce authentication to the server call
- play with build options (for example add lint)
- error handling for failed promises

## Backend
Backend api contains a single endpoint that returns content of the hardcoded JSON. This content is grouped and numbers are summed up as required.
Potential extensions:
- introduce authentication
- extend the project with database instead of sample json and build DB repository
- extend the api with error handling
- play with the structure of the project to extract the routing
- introduce zod validation

