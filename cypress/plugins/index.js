/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */





const sqlServer = require('cypress-sql-server')
const dbConfig = require('C:/Users/Work HP PC/Cypress/cypress.json')
module.exports = (on, config) => {
  tasks = sqlServer.loadDBPlugin(config.env.db)
  on('task', tasks)
  return tasks
}