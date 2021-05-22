import { runCode } from "../services/codeRunService.js";

/**
 * Runcode controller
 * @param {*} app
 */
export const appController = (app) => {
  app.post("/runCode", runCode);
};
