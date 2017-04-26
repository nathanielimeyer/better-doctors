# Better-Doctors

#### _An application to find doctors in a given area (optional) who treat a given condition (optional) and take a given insurance (optional). It makes use of the Better Doctors API (https://betterdoctor.com/)_

#### By _**Nathaniel Meyer**_

## Installation

* `git clone https://github.com/nathanielimeyer/better-doctors.git`
* `cd better-doctors`
* `npm install`
* `bower install`

## Prerequisite

* Get an api key for the better-doctors app at https://developer.betterdoctor.com/.
* Create an .env file and store it in the root of the project (/bustle-clone).

## Deploying

* `gulp build && gulp serve`
* Your app will appear in the browser at http://localhost:3002/.

## Known issues

* The condition autocomplete field currently has its values hard-coded. This is because calling the better doctors API for all conditions and all insurances fails with a 429 error EVEN IF a set timeout of 5000 ms is used.
* The doctor details modal does not display education, practices, insurance, or specialties. These could be built in the back end and supplied to the $("#modals").append call later.
* For development purposes, this app makes use of the http://ip-api.com/ to determine user location. This is not approved for commercial use and should be replaced with a more robust API prior to commercial use.
