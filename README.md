
# Laravel-Quasar GoMedia Demo

This is a demo Laravel powered app.

## Installation

* `git clone git@github.com:free-4-ever/gomedia.git`
* `composer install`

## Setup

first setup the enviroment file in the root of the project.

### Generate an application key

* `php artisan key:generate`

### Migrate the Database

Migrate the database. Make sure you invoke it with the seed flag so a user is created and the list is filled.

* `php artisan migrate --seed`

### Config

Make sure your domain is among the values under 'stateful' key in sanctum.php configuration file (in case serving the app not from localhost).

### Building front-end assets

* `npm install`
* `npm run dev`

or

* `yarn install`
* `yarn run dev`

## Usage

A user model with following credentials is already available.  
email: demo@gomedia.com  
pass: 12345678
