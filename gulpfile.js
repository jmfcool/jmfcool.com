import gulp from 'gulp';
import concat from 'gulp-concat';
import minify from 'gulp-minify';
import uglify from 'gulp-uglifycss';
import webp from 'gulp-webp';
import shell from 'gulp-shell';
import git from 'gulp-git';
import bump from 'gulp-bump';
import filter from 'gulp-filter';
import tagVersion from 'gulp-tag-version';

/* Build */

gulp.task('scripts', () => {
    return gulp.src(['./js/lib/jquery.js','./js/lib/jquery.validate.js','./js/lib/jquery.pagination.js','./js/lib/bootstrap.js','./js/lib/lazysizes.js'])
    .pipe(concat('release.min.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('minify', () => {
    return gulp.src('./build/release.min.js')
    .pipe(minify({
        ext:{
            min:'.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('styles', () => {
    return gulp.src(['./css/*'])
    .pipe(concat('release.min.css'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('uglify', function () {
    return gulp.src('./build/release.min.css')
    .pipe(uglify({
        "maxLineLen": 80,
        "uglyComments": true
    }))
    .pipe(gulp.dest('./build/'));
});

gulp.task('build', gulp.series('scripts','minify','styles','uglify'));

/* End of Build */
/* Imaages */

gulp.task('webp', () => {
    return gulp.src('./images/*')
    .pipe(webp())
    .pipe(gulp.dest('build/images/'))
});

gulp.task('images', gulp.series('webp'));

/* End of Images */
/* Git */

gulp.task('pull', (callback) => {
    git.pull('origin', 'main', (err) => {
        if (err) throw err;
    });
    callback();
});

gulp.task('add', () => {
    return gulp.src('.')
    .pipe(git.add());
});

gulp.task('commit', () => {
    return gulp.src('.')
      .pipe(git.commit('Update repo from gulp'));
});

gulp.task('push', (callback) => {
    git.push('origin', (err) => {
        if (err) throw err;
    });
    callback();
});

gulp.task('tags', (callback) => {
    git.push('main', { args: ' --tags' }, (err) => {
        if (err) throw err;
    });
    callback();
});

gulp.task('git', gulp.series('add','commit','tags','push'));

/* End of Git */
/* Bump */

/**
 * Bumping version number and tagging the repository with it.
 * Please read http://semver.org/
 *
 * You can use the commands
 *
 *     gulp patch     # makes v0.1.0 → v0.1.1
 *     gulp feature   # makes v0.1.1 → v0.2.0
 *     gulp release   # makes v0.2.1 → v1.0.0
 *
 * To bump the version numbers accordingly after you did a patch,
 * introduced a feature or made a backwards-incompatible release.
 */
 
 function inc(importance) 
 {
    return gulp.src(['./package.json'])
        .pipe(bump({type: importance}))
        .pipe(gulp.dest('./'))
        .pipe(git.commit('bumps package version'))
        .pipe(filter('package.json'))
        .pipe(tagVersion());
}
 
gulp.task('patch', function() { return inc('patch'); })
gulp.task('minor', function() { return inc('minor'); })
gulp.task('major', function() { return inc('major'); })

gulp.task('tag', shell.task('git push --tags'));

/* End of Bump */
/* Watch */

gulp.task("watch", () => {
    gulp.watch(['css','js'], gulp.series('styles','uglify'));
});

/* End of Watch */
/* Continous Integration / Countinous Delivery (cicd) */

gulp.task('tests', shell.task('npm test'));
gulp.task('deploy', gulp.series('tests','build','patch','tag','git'));

/* End of Continous Integration / Countinous Delivery (cicd) */