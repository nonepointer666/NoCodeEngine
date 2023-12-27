import delPath from "../utils/delpath";
import { series, parallel, src, dest } from "gulp";
import { pkgPath, componentPath, rootPath } from "../utils/paths";
import less from "gulp-less";
import autoprefixer from "gulp-autoprefixer";
import run from "../utils/run";
//删除dist
const removeDist = () => {
  return delPath(`${rootPath}/dist/fiery/vue`);
};

const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${rootPath}/dist/fiery/vue/lib/src`))
    .pipe(dest(`${pkgPath}/dist/fiery/vue/es/src`));
};

const buildComponent = async () => {
  run("pnpm run build", componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildComponent(),
    async () => buildStyle(),
  ),
);
