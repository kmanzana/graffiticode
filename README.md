## Getting started with Graffiticode

### Steps include (Mac OSX)

* Setting up the global environment
  * `$ sudo npm install -g browserify`
* Clone and initialize the GC repo.
  * `$ git clone git@github.com:graffiticode/graffiticode.git`
  * `$ cd graffiticode`
  * `$ npm install`
* Setup environment variable to point to remote Postgres database.
  * `$ export DATABASE_URL_DEV="postgres://wlovjffqtabvgr:67d461087192e361c01318446450356e3b9f86b3411b4e9efd8f7900af1b52e6@ec2-23-21-171-25.compute-1.amazonaws.com:5432/dbs6stheh2q96c"`.
  * Make sure the configuration constants near the top of 'app.js' are set as follows: `const DEBUG = true; const LOCAL_COMPILES = true; const LOCAL_DATABASE = false;`
* [OPTIONAL] Create local Postgres database (Install Postgres if needed).
  * `$ psql -c "create database localgcdb"`
  * `$ psql -d localgcdb -f tools/initgcdb.sql`
* Start Graffiticode app.
  * `$ make`
* Make an artcompiler (see https://github.com/graffiticode/L0)
