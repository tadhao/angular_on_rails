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
*   Cheers!
