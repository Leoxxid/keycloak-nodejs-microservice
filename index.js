const express = require('express');
const keycloak = require('./config/keycloak-config.js').initKeycloak();
const app = express();
app.use(keycloak.middleware());

let testController = require('./controller/test-controller.js');
app.use('/test', testController);

app.listen(3000);