# OW-REACT TEMPLATE PLUGIN

A module to use mount methods to run the usual index.js in a create-react-app, inside overwolf templates (typescript).

<br/>
<br/>

# Implementation example:

We are using the Typescript template from <https://github.com/overwolf/sample-app> with a slightly modified template structure. Read the comments below.
<br/>
You can find my modified typescript overwolf app template at <https://github.com/daveinchy/overwolf-template>.

```
import WindowManager from "../window";
import { logError, logMessage } from "../debug";
import { GameClassId, GamesFeatures, Hotkeys, WindowNames } from "../global";
import { getCircularReplacer } from "../utils";
import {
    IOWGamesEventsDelegate,
    OWGames,
    OWGamesEvents,
    OWHotkeys
} from "@overwolf/overwolf-api-ts";

// Importing the package you installed through `npm i ow-react`
// mountRoot uses the `ow-react` included template.html - use `ow-react/template.html` in your `webpack.config.js`
// and mountComponent mounts your components into the webpack assigned html templates container element
// by using the second argument to select an id-ed element with a selector (string) like `body.container`
import { mountComponent as mountContainer, mountRoot as mountApp } from "ow-react";
// Import a JSX.Element or a React.Component
import Component from "../components/content/ExampleElement";

class DesktopWindow extends WindowManager {
    private static _instance: any;
    public _app: any;
    public static _windowName = WindowNames.splash;

    private constructor() {
        super(DesktopWindow._windowName);
        logMessage("window", "Initializing '" + DesktopWindow._windowName + "' instance");
    }

    public static instance() {
        if (!this._instance) {
            this._instance = new DesktopWindow();
        }
        logMessage("window", "Instance '" + DesktopWindow._windowName + "' successfully initialized");
        return this._instance;
    }

    public async run() {
        // Here we use it to create a react app instance where the first argument is a:
        // JSX.Element or React.Component
        this._app = mountApp(Component);
        this.setWindowBehavior();
        logMessage("react", "React '" + DesktopWindow._windowName + "' Mounted :\n" + JSON.stringify(this._app, getCircularReplacer()));
    }

    public async wait(intervalInMilliseconds: any) {
        return new Promise((resolve) => {
            setTimeout(resolve, intervalInMilliseconds);
        });
    }
}

DesktopWindow.instance().run();
```

<br/>
<br/>
Author: github.com/daveinchy
