import fs from "fs";
import { exec } from "child_process";

/**
 * Util method to run and execute code.
 * @param {*} codeString
 * @param {*} res
 */
export const compileAndRunCode = (codeString, res) => {
  fs.writeFile("Solution.java", codeString, function (err) {
    if (err) throw err;
    console.log("Saved!");
    exec("javac Solution.java", (error, stdout, stderr) => {
      if (error) {
        res.send(error.message);
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        res.send(stderr);
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      exec("java Solution", (error, stdout, stderr) => {
        if (error) {
          console.log(`error: ${error.message}`);
          res.send(error.message);
          return;
        }
        if (stderr) {
          console.log(`stderr: ${stderr}`);
          res.send(stderr);
          return;
        }
        console.log(`Code Snippet Output: ${stdout}`);
        res.send(stdout);
      });
    });
  });
};
