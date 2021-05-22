import { compileAndRunCode } from "../lib/utils/codeRunHelper.js";

/**
 * Runcode controller handler
 * @param (req , res)
 * @returns
 */
export const runCode = (req, res) => {
  console.log(" request hit", req.body);
  compileAndRunCode(req.body.codeString, res);
};
