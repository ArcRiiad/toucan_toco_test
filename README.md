[![Build Status](https://travis-ci.com/ArcRiiad/toucan_toco_test.svg?branch=master)](https://travis-ci.com/ArcRiiad/toucan_toco_test)

# Toucan Toco Test X Riadh

This repository contain the project of Toucan-Toco Test.

## API doc

[Doc](https://documenter.getpostman.com/view/1681785/SWLe6ncy?version=latest)

## Environment variables

These variables are required to run the API in local or the Docker image.
Please ensure all these Env variables are setup before creating an issue on Github.

    X is equal to NODE_ENV value in capslock. example: DB_USERNAME_DEVELOPMENT

| Variable      | Desc                                          |
| ------------- | --------------------------------------------- |
| DB_USERNAME_X | Database username                             |
| DB_PASSWORD_X | Database password                             |
| DB_NAME_X     | Database name                                 |
| DB_HOSTNAME_X | Database remote Host                          |
| DB_PORT_X     | Database port Host                            |
| NODE_ENV      | Env Type (Production/Development/Test)        |
| PORT          | Application port (default 3000, Not required) |

## Setup and requirement

The project requires [Node.js](https://nodejs.org/) v12 to run.

```sh
$ node -v
v12.13.1
```

If you have nvm already installed, go to the project folder and:

```sh
$ nvm use
Now using node v12.13.1 (npm v6.12.1)
```

## Start the project

After installing the right node version and setting the environment variables
Next step is to install dependencies

```sh
$ npm install
audited 478 packages in 1.348s
found 0 vulnerabilities
```

Then you are ready to go!

```sh
$ npm start
```

    The API will be listening on: **3000**

**The application will automatically import the required data and instantiate all tables at run time**

## Docker image

This project is shipped with CI/CD, every time you commit on master, a new docker image is built ([image](https://hub.docker.com/r/archcom/toucan_tocot_test)).

To run the docker image:

```sh
$  docker run \
-e DB_NAME_DEVELOPMENT='YOUR_DATABASE' \
-e DB_PASSWORD_DEVELOPMENT='YOUR_PASSWORD' \
-e DB_USERNAME_DEVELOPMENT='YOUR_USERNAME' \
-e DB_PORT_DEVELOPMENT='YOUR_PORT' \
-e DB_HOSTNAME_DEVELOPMENT='YOUR_IP' \
-p 5000:3000 archcom/toucan_tocot_test:latest
```

And the API should be waiting for your request on the **5000** port

## For lazy people

A docker-compose file is provided to start a MySql database and PhpMyAdmin.

```sh
$ docker-compose up -d
Creating network "toucantocotest_mysql" with the default driver
Creating toucantocotest_phpmyadmin_1 ...
Creating toucantocotest_db_1 ...
Creating toucantocotest_phpmyadmin_1
Creating toucantocotest_db_1 ... done
```

At this point, the database is available on the port **4306** and PhpMyAdmin on **localhost:8082**
