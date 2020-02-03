# README

## Steps to follow to create Rails 6 with Angular 8
*   Create new project by running,
    ```sh
    rails new angular_on_rails
    cd angular_on_rails
*   The frontend will be Angular so installing dependencies of webpacker:angular as,
    ```sh
    rails webpacker:install:angular
    ```
*   Create new controller as,
    ```sh
    rails g controller dashboard
    ```
*   Add Index method to `dashboard_controller.rb`
*   Add root page to `routes.rb` as
    ```sh
    root to: 'dashboard#index'
    ```
*   Under views folder, add folder with name `dashboard` and underneath that folder add `index.html.erb` file
*   Add following lines to `index.html.erb`
    ```sh
    <hello-angular></hello-angular>
    <%= javascript_pack_tag "hello_angular" %>
    ```
*   Start the server by running `rails s`
*	Cheers!

## Steps to follow to create custom .html page for Angular 8
*	First we need `.html` loader for Angular
	```sh
	yarn add html-loader
	```
*   Add following line of code to `enviroment.js`
    ```sh
    const { environment } = require('@rails/webpacker')
    const typescript = require('./loaders/typescript')
    environment.loaders.append('html', {
		test: /\.html$/,
		use: [{
			loader: 'html-loader',
			options: {
				minimize: true,
				removeAttributeQuotes: false,
				caseSensitive: true,
				customAttrSurround: [
						[/#/, /(?:)/],
						[/\*/, /(?:)/],
						[/\[?\(?/, /(?:)/]
				],
				customAttrAssign: [/\)?\]?=/]
			}
		}]
    })
    environment.loaders.prepend('typescript', typescript)
    module.exports = environment
    ```
*	Add html extension to `webpacker.yml` as `/config/webpacker.yml`
	```sh
	extensions:
		- .tsx
		- .ts
		- .mjs
		- .js
		- .sass
		- .scss
		- .css
		- .module.sass
		- .module.scss
		- .module.css
		- .png
		- .svg
		- .gif
		- .jpeg
		- .jpg
		- .html
	```
*	Create `html.d.ts` file as `app/javascript/hello_angular/html.d.ts` and add following line of code
	```sh
	declare module "*.html" {
		const content: string
		export default content
	}
	```
*	Now enviroment is set, so let's create `app.component.html` as `app/javascript/hello_angular/app/app.component.html` and add code in it as below
	```sh
	<h1>Hello {{name}}</h1>
	```
*	Call it in the module of `app.module.ts` as,
	```sh
		import { Component } from '@angular/core';
		import templateString from './app.component.html'

		@Component({
			selector: 'hello-angular',
			template: templateString
		})
		export class AppComponent {
			name = 'Tushar!';
		}
	```
*	Cheers!
*   Simple tuitorial to follow is given in the webpacker git repo (https://github.com/rails/webpacker/blob/master/docs/typescript.md#html-templates-with-typescript-and-angular)

