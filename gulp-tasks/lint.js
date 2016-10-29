'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');
const gitignore = require('gitignore-to-glob')();

gitignore.push('components/**/*.ts');
gitignore.push('ng2-vis.ts');

gulp.task('tslint', () =>
  gulp
    .src(gitignore)
    .pipe(tslint({
      formatter: 'verbose',
      emitError: true,
      summarizeFailureOutput: true,
      reportLimit: 50
    }))
    .pipe(tslint.report())
);

gulp.task('lint', ['tslint']);
