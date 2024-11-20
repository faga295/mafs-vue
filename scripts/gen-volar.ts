import fs from "fs";
import path from "path";
import process from "process";
import * as components from "../src/component";

const genCode = (mainCode: string) => `declare module '@vue/runtime-core' {
    export interface GlobalComponents {
      ${mainCode} 
  }
}
export {}`;

const genMainCode = () => {
  let mainCode = "";
  Object.keys(components).forEach((key: string) => {
    mainCode += `${key}: typeof import('mafsv')['${key}']\n      `;
  });
  return mainCode;
};
fs.writeFile(
  path.resolve(process.cwd(), "volar.d.ts"),
  genCode(genMainCode()),
  (err) => {
    if (err) console.log(err);
  },
);
