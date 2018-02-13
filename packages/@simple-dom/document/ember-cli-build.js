const build = require('../../../lib/build');

module.exports = function () {
  const workspace = build.normalizeWorkspacePath(__dirname);
  const src = build.funnelSrc(workspace);
  const compiled = build.compileSrc(src, {
    // force node resolution
    paths: undefined,
    baseUrl: undefined,
  });
  return build.packageDist(compiled, workspace, true);
}
