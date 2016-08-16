# framer-electron

**Clone and run for a quick way to see an Electron and Framer in action.**

A basic Electron application needs just these files:

- `package.json` - Points to the app's main file and lists its details and dependencies.
- `main.js` - Starts the app and creates a browser window to render HTML. This is the app's **main process**.
- `index.html` - A web page to render. This is the app's **renderer process**.

Framer.js comes prepackaged with this project. All you need to do is edit `app.coffee` in the text editor of your choice.

You can learn more about each of Electron-specific components within the [Electron Quick Start Guide](http://electron.atom.io/docs/latest/tutorial/quick-start).

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/jaredpalmer/framer-electron
# Go into the repository
cd framer-electron
# Install dependencies and run the app
npm install && npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).
