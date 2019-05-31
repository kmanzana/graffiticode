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
  * Make sure the following environment (export) variables are set:
    * `$ export DEBUG=true`
    * `$ export LOCAL_COMPILES=true`
    * `$ export LOCAL_DATABASE=false`
* [OPTIONAL] Create local Postgres database (Install Postgres if needed).
  * `$ psql -c "create database localgcdb"`
  * `$ psql -d localgcdb -f tools/initgcdb.sql`
  * `$ export LOCAL_DATABASE=true`
* Start Graffiticode app.
  * `$ make`
* Make an artcompiler (see https://github.com/graffiticode/L0)

### Notes
All language compilers run locally are expected to be at the port where `5` is subbed in for `L` in the language code.  `L0` becomes port `50` which can create issues if your machine only allows root access to ports less than 1000.  This bash code forwards traffic from port `50` to `5050` so that the compiler can be run on port `5050` instead.
```bash
$ echo "
rdr pass inet proto tcp from any to any port 50 -> 127.0.0.1 port 5050
" | sudo pfctl -ef -
$ port=5050 make # run in compiler (L0 in this example) directory
```
