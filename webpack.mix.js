let mix = require('laravel-mix');

mix.options({
		processCssUrls: false
	})
	.copyDirectory('src/img','assets/img')
	.js('src/js/app.js', 'assets/script.js')
    .sass('src/sass/app.scss', 'assets/style.css');