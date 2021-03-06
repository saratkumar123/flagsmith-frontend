[<img alt="Feature Flag, Remote Config and A/B Testing platform, Flagsmith" width="100%" src="./hero.png"/>](https://flagsmith.com/)

# Flagsmith

Flagsmith makes it easy to create and manage features flags across web, mobile, and server side applications. Just wrap a section of code with a flag, and then use Flagsmith to toggle that feature on or off for different environments, users or user segments.

## Flagsmith Frontend

The frontend application for [Flagsmith](https://flagsmith.com/). Flagsmith allows you to manage feature flags and remote config across multiple projects, environments and organisations.

This project connects to the [Flagsmith API](https://github.com/Flagsmith/flagsmith-api).

<img alt="Flagsmith Screenshot" width="100%" src="https://github.com/Flagsmith/flagsmith-api/raw/master/screenshot.png"/>

## Features

* **Feature flags**. Release features with confidence through phased rollouts.
* **Remote config**. Easily toggle individual features on and off, and make changes without deploying new code.
* **A/B and Multivariate Testing**. Use segments to run A/B and multivariate tests on new features. With segments, you can also introduce beta programs to get early user feedback.
* **Organization Management**.  Organizations, projects, and roles for team members help keep your deployment organized.
* **Integrations**. Easily enhance Flagsmith with your favourite tools.

## Using Flagsmith Frontend

* These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 
* See running in production for notes on how to deploy the project on a live system.

## Resources

* [Flagsmith API](https://github.com/Flagsmith/flagsmith-api)
* [Website](https://www.flagsmith.com/)
* [Documentation](https://docs.flagsmith.com/)
* If you have any questions about our projects you can email [support@flagsmith.com](mailto:support@flagsmith.com)

# Flagsmith Frontend

The frontend application for [https://flagsmith.com/](https://www.flagsmith.com/). Flagsmith allows you to manage feature flags and remote config across multiple projects, environments and organisations.

This project connects to the [Flagsmith API](https://github.com/Flagsmith/Bullet-Train-API).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See running in production for notes on how to deploy the project on a live system.

## Prerequisites

What things you need to install the software and how to install them

| Location                                                     | Suggested Version       |
| -------------                                                |:-------------:|
| <a href="https://nodejs.org/en/">NodeJS</a>                     | >= 6.0.0 |
| <a href="https://nodejs.org/en/">npm</a>                        | >= 4.0.0 |

## Installing

```bash
npm i
```

## Running

**Development**

Hot reloading for client / server

```bash
npm run dev
```

**Production**

You can deploy this application on [Heroku](https://www.heroku.com/) and [Dokku](http://dokku.viewdocs.io/dokku/) without making any changes, other than the API URL in [project_prod.js](/env/project_prod.js)  

Bundles, minifies and cache busts the project to a build folder and runs node in production. This can be used as part of your deployment script.

```bash
npm run bundle
npm start
```

## ENV variables

Variables that differ per environment are exported globally to ``window.Project in`` [common/project.js](./common/project.js), this file gets replaced by a project.js located in [env](./env) by webpack based on what is set to the "ENV" environment variable (e.g. ENV=prod).
 
You can override each variable individually or add more by editing [environment.js](./environment.js). 

Current variables used between [environment.js](./environment.js) and [common/project.js](./common/project.js):

- API_URL: The API to hit for requests 
- FLAGSMITH: The flagsmith project we use to manage features
- GA: Google analytics key
- CRISP_CHAT: Chat widget key
- MIXPANEL: Mixpanel analytics key
- SENTRY: Sentry key
- ASSET_URL: Used for replacing local static paths with a cdn, .e.g https://cdn.flagsmith.com
- BASENAME: Used for specifying a base url path that's ignored during routing if serving from a subdirectory

## E2E testing

This project uses [Nightwatch](http://nightwatchjs.org/) for automated end to end testing with chromedriver.

```bash
npm test
```

## Built With

- React
- Webpack
- Node

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/kyle-ssg/c36a03aebe492e45cbd3eefb21cb0486) for details on our code of conduct, and the process for submitting pull requests to us.

## Getting Help

If you encounter a bug or feature request we would like to hear about it. Before you submit an issue please search existing issues in order to prevent duplicates.

## Get in touch

If you have any questions about our projects you can email <a href="mailto:projects@solidstategroup.com">projects@solidstategroup.com</a>.

## Running locally against your own Flagsmith API instance

We use Flagsmith to manage features we rollout, if you are using your own Flagsmith environment (i.e. by editing project_x.js-> flagsmith) then you will need to have a replica of our flags.

A list of the flags and remote config we're currently using in production can be found here https://gist.github.com/kyle-ssg/55f3b869c28bdd13c02c6688bc76c67f.


## Useful links

[Website](https://flagsmith.com)

[Product Roadmap](https://product-hub.io/roadmap/5d81f2406180537538d99f28)

[Documentation](https://docs.flagsmith.com/)

[Code Examples](https://github.com/Flagsmith/bullet-train-docs)

[Youtube Tutorials](https://www.youtube.com/channel/UCki7GZrOdZZcsV9rAIRchCw)
