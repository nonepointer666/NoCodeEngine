import delPath from "../utils/delpath";
import { series, parallel } from "gulp";
import { pkgPath } from "../utils/paths";

export const removeDist = () => {
  return delPath(`${pkgPath}/dist`);
};

export default series(async () => removeDist());
