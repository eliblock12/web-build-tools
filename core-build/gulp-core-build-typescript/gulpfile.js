'use strict';

const tslint = require('tslint');
const build = require('@microsoft/node-library-build');
const path = require('path');
const fs = require('fs');

build.tslint.setConfig({
  lintConfig: require('./src/defaultTslint.json'),
  rulesDirectory: tslint.Configuration.getRulesDirectories(tslint.Configuration.getRulesDirectories(['./node_modules/tslint-microsoft-contrib'], __dirname))
});

build.task('default', build.serial(build.parallel(build.tslint,
  build.typescript),
  build.parallel(build.serial(build.instrument,
    build.mocha),
    build.subTask('run-api-extractor',
      (gulp, buildConfig, callback) => {
        const externalApiHelper = require('@microsoft/api-extractor').ExternalApiHelper;
        const files = ['resources/external-api-types/es6-collections/index.d.ts',
          'resources/external-api-types/web-apis/index.d.ts'];

        for (const filePath of files) {
          externalApiHelper.generateApiJson(buildConfig.rootPath, buildConfig.libFolder, filePath);
        }

        callback();
      }))));

build.initialize(require('gulp'));
