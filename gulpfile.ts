import path from 'path'
import process from 'process' 
import { dest, src } from 'gulp'
import  dartSass  from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import chalk from 'chalk'
import consola from 'consola'

const outDir = path.resolve(process.cwd(), 'dist')
function scssTranspile(){
  const sass = gulpSass(dartSass)
  return src('./src/**/*.scss')
    .pipe(sass.sync())
    .pipe(cleanCSS({}, (details) => {
      consola.success(
        `${chalk.cyan(details.name)}: ${chalk.yellow(
          details.stats.originalSize / 1000
        )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
      )
    }))
    .pipe(dest(outDir))
}


export default scssTranspile 