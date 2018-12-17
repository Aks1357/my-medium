const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
  const files = [
    './dist/runtime.js',
    './dist/polyfills.js',
    './dist/scripts.js',
    './dist/main.js'
  ];

  await fs.ensureDir('elements');
  await concat(files, 'elements/aks-my-medium.js');
  if (fs.existsSync('aks-my-medium-test/index.js')) {
    fs.unlinkSync('aks-my-medium-test/index.js');
  }
  fs.copyFileSync('elements/aks-my-medium.js', 'aks-my-medium-test/index.js');
})();
