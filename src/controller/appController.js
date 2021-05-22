import { runCode } from "../services/codeRunService.js";

export const appController = (app) => {
  app.post("/runCode", runCode);
};
