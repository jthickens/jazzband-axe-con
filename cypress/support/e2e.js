import "@axe-core/watcher/dist/cypressCommands";
import { wrapCy } from '@axe-core/watcher/dist/cypress';

beforeEach(() => {
  wrapCy(cy)
})

afterEach(() => {
  cy.axeFlush();
});