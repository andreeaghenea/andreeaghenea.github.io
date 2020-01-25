let mix = require('laravel-mix');

mix.options({
		processCssUrls: false
	})
	.js('src/js/app.js', 'assets/script.js')
    .sass('src/sass/app.scss', 'assets/style.css');