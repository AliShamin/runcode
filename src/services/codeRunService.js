import { compileAndRunCode } from "../lib/utils/codeRunHelper.js";
export const runCode = (req, res) => {
  console.log(" request hit", req.body);
  compileAndRunCode(req.body.codeString, res);
};
