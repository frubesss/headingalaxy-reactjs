# Head In The Galaxy
[![Code Climate](https://codeclimate.com/github/frubesss/headingalaxy-reactjs/badges/gpa.svg)](https://codeclimate.com/github/frubesss/headingalaxy-reactjs)

Finally you can put your head in a galaxy and make it spin!

![Demo](readme_images/demo.gif)

## Built With

* create-react-app - https://github.com/facebookincubator/create-react-app
* ReactJS - https://facebook.github.io/react/
* Webpack - https://webpack.js.org
* Bable - https://babeljs.io
* MaterialUI - http://www.material-ui.com
* Yarn - https://yarnpkg.com
* react-dropzone - https://github.com/okonet/react-dropzone
* super-agent - https://github.com/visionmedia/superagent

## Before you begin

* Make sure that you have the following prerequisites installed:
    * The [Node.js](https://nodejs.org/#download) runtime, including the [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/lang/en/docs/install/) package manager
    * Cloudinary Account with upload mode set to Unsigned.
    * Your mind to be blown by putting a head in a galaxy
    
### Configuring the app environment

1. Copy or rename the `config.json.example` file to `config.json`.

1. Paste  the `upload_preset`, `upload_url`  and `cloud_name` values (without quotation marks) from the Cloudinary into the `CONVERSATION_PASSWORD` and `CONVERSATION_USERNAME` variables in the `config.json` file. For example:

    ```
    "upload_preset": <upload_preset>,
    "upload_url": <upload_url>,
    "cloud_name": <cloud_name>
    ```

    
### Installing and starting the app

1. Install the app package into the local Node.js runtime environment:

    ```bash
    yarn install or npm install
    ```

1. Start the app:

    ```bash
    yarn start or npm start
    ```

1. Point your browser to http://localhost:3000 to try out the app.