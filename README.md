## TUTORIAL DIALOGFLOW-GATEWAY

- 1: rodar o servidor express no arquivo express_server.js
- 2: expor a porta 4000 ao ngrok ('./ngrok http 4000')
- 3: ir ao console do dialogflow-gateway: https://dialogflow.cloud.ushakov.co/console/
- 4: ir em Setting e modificar a URL do Webhook, utilizando a URL do ngrok + /dialogflow-webhook
- 5: executar npm run dev para testar o componente.


![](https://i.imgur.com/J8aTIwt.png)

# Dialogflow for Web *v2*

> [Dialogflow](https://dialogflow.com) lets you build conversational interfaces on top of your products and services by providing a powerful natural language understanding (NLU) engine to process and understand natural language input

This is a unofficial Web Integration for Dialogflow V2, which supports everything the Platform has to offer

The development of this project is done by @mishushakov

If you have any questions, feel free to [contact](https://i.ushakov.co)

#### 🎉 Announcement: Dialogflow for Web v2.6 is here 🎉

![](https://i.imgur.com/wXpioBw.png)

- **NEW** Dark Mode & [Theming](#theming)
- **NEW** Improved Layout on Desktop and Mobile
- **NEW** Best-in-class Actions on Google support
- **NEW** Table Card, Media Card, 3-Line Lists ...
- **NEW** Precise auto-scrolling
- **NEW** No more vendor-dependency. 100% Plug-and-Play
- **NEW** Better documentation and code

## Features

- Progressive Web App (100/100 Lighthouse score)
- Accessibility Features
- Wide Browser Support (IE8+), offline capabilities (history) and great SEO
- Familiar UI & UX, based on the official Google Assistant Design Specifications
- Hands-free interaction with Voice Input and Speech Feedback
- Language Independency
- Docker and Kubernetes support
- Rich-component, Webhook and Actions on Google Support ([demo](https://codepen.io/mishushakov/pen/YMwoEK))
- Iframe Support ([demo](https://codepen.io/mishushakov/pen/ywWaRW))
- Based on Vue, Webpack 4, Babel 7
- Lightweight (build is <100KB)
- Free and Documented
- Free hosted version on [Dialogflow Gateway](https://dialogflow.cloud.ushakov.co)
- Made in Germany
- Recommended by [Dialogflow](https://twitter.com/Dialogflow/status/923976390201847809) and [MadeWithVueJS](https://twitter.com/MadeWithVueJS/status/1130147606666063875):

![](https://i.imgur.com/yWv9mBu.png)
![](https://i.imgur.com/N70Kl62.png)

# Installation

## Requirements

- NodeJS
- NPM or Yarn
- Basic knowledge in JS
- Google Account and Dialogflow V2 Agent (if you look for V1, please use my [old repo](https://github.com/mishushakov/dialogflow-web) and the [instructions](https://github.com/mishushakov/dialogflow-web/blob/21ffc7017f1a4d51eabb1122c5aae119a7d73587/README.md))

## Read the license

Before making any further steps please *read* the [license](LICENSE). You should not use this work, if you are not willing to accept the terms and conditions under which it was provided to you. Any activities against license conditions may be followed by law

## Set up [Dialogflow Gateway](https://dialogflow.cloud.ushakov.co)

Dialogflow Gateway is a cloud-based service, which makes third-party Dialogflow V2 Integrations like this possible

Follow a detailed guide, on how to connect your Agent to the Gateway [here](https://github.com/mishushakov/dialogflow-gateway-docs/blob/master/guide.md) and return to this guide, when you are finished

## Clone the repository

You can use git or download it directly from github

![](https://imgur.com/bpHE9K6.png)

## Get the dependencies

Open the cloned folder. Then, using your favorite package manager get the dependencies

Example using npm

`npm install`

Example using yarn

`yarn`

## Connect your Agent

Open `config.js` and change the `gateway` variable to your Dialogflow Gateway URL. If you don't know, what Dialogflow Gateway is, please read the docs one more time, because you have missed something out

Hint: the Dialogflow Gateway URL is always your google cloud project id + `.gateway.dialogflow.cloud.ushakov.co`. If you have troubles finding it, make sure you connected your Agent to the Gateway, then visit the [console](https://dialogflow.cloud.ushakov.co/console/), click on "Manage" and copy the Gateway URL

Example

```js
export default {
    app: {
        gateway: "https://dialogflow-web-v2.gateway.dialogflow.cloud.ushakov.co"
        [...]
    }
}

[...]
```

The logo, agent name, description and the available languages are fetched from Dialogflow directly. Change them in Dialogflow and it will be synced to the UI. Please note, when adding new languages, you may have to translate some of the UI as well (`i18n` field in `config.js`). Also don't forget to clean your cache, if you make changes to the Agent

## Developing

Open your cloned folder. Then, using your favorite package manager run `dev` command

Example using npm

`npm run dev`

Example using yarn

`yarn dev`

When you done these steps, your default browser should open and redirect you to `localhost:8080`. If the port 8080 is already in use, you can give an `port` argument to connect at specified port

Example using npm

`npm run dev --port 9090`

Example using yarn

`yarn dev --port 9090`

**PLEASE DO NOT USE THE DEVELOPMENT SERVER FOR SERVING YOUR APP IN PRODUCTION, DEVELOPMENT SERVER IS MEANT FOR THE DEVELOPMENT. INSTEAD PLEASE UPLOAD BUILD ARTIFACTS TO A STATIC WEB-SERVER**

## Theming

You can make a custom theme for Dialogflow for Web v2, according to the specification:

![](https://svgur.com/i/E0R.svg)

To apply the variables, open `src/components/App/Theme.sass` and change them in the `\:root` selector

You can also optimize your theme for Dark-mode-enabled clients within the same file and selector under the `@media (prefers-color-scheme: dark)`

## Building

Your app will be bundled to `dist/build.js`

To build it you can use npm or yarn

Example using npm

`npm run build`

Example using yarn

`yarn build`

## Frequently Asked Questions

- Q: I changed the gateway url, but the responses are the same as with the previous one
- A: Make sure you have **cleaned your cache** and **rebuilt your app**. In Safari go to "Develop" > "Empty Caches". In Chrome: "Developer Tools" > "Application" > "Clear storage" > "Clear site data"