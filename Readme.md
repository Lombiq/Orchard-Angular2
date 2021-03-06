# Angular2 readme



## Loading scripts

The beta 3 release of Angular2 depends on 6 3rd party libraries. The most important one is the SystemJs dynamic module loader.
You have to include these scripts in an exact order and you have to configure the System object.
The libraries are defined in this module's ResourceManifest, but the configuration of the System object is your job to to.
All you have to to is below:
- Create a System configurator script
-- Name: system-config.js
-- Content: 
System.config({
    baseURL: "/Modules/DotNest.Frontend/Scripts",
    packages: {
        "tenant-editor": {
            // The entry point of the package.
            main: "bootstrap",
            format: "register",
            defaultExtension: "js"
        },
        rxjs: {
            defaultExtension: "js"
        }
    },
    defaultJSExtensions: true
});
- Create a System import script
-- Name: system-import.js
-- Content: 
System.import("tenant-editor").then(null, console.error.bind(console));
- Define these in your ResourceManifest
- Make this delicate dependency chain: manifest.DefineScript("System.Import").SetUrl("system-import.js").SetDependencies("SystemJs", "System.Config", "Angular2");
- Inculde only System.Import into your documents' _head_


## Bootstrapping Angular2 application

- Load the scripts as discussed above.
- You need an application folder what you import during the System.import call.
- You need a bootstrapper/main script what will bootstrap your application and load the main components.
-- Name: bootstrap.ts
-- Content:
import {bootstrap}    from 'angular2/platform/browser'
import {TenantEditorComponent} from './tenant-editor.component'
bootstrap(TenantEditorComponent);
- You need a main component.
-- Name: tenant-editor.component.ts
-- Content:
import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>'
})
export class TenantEditorComponent { }
- And finally as we specified above a <my-app>Loading...</my-app> element.


## Learning material

- Angular2 Quickstart: https://angular.io/docs/ts/latest/quickstart.html
- Angular2 Tutorial: https://angular.io/docs/ts/latest/tutorial/
- Angular2 Developer Guide: https://angular.io/docs/ts/latest/guide/
- Typescript Tutorial: http://www.typescriptlang.org/Tutorial


## Softwares

- Visual Studio 2015
- Typescript 1.8.1.0 beta for Visual Studio 2015
- Set TypescriptToolVersion to 1.8 in your project
- A tsconfig.json like this (this must be placed into the project's root):
{
  "compilerOptions": {
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "module": "system",
    "moduleResolution": "node",
    "noImplicitAny": false,
    "removeComments": false,
    "sourceMap": true,
    "target": "es5"
  },
  "exclude": [
    "Scripts/node_modules"
  ]
}
- Compile on save won't work in Visual Studio, if you want to build the your .ts files you have to build your project. (Or fire up a tsc file watcher with npm.)

## Upgrading Angular2

- Update package.json package versions.
- Delete scripts/node-modules folder.
- Delete scripts/typings folder.
- Run "npm install" commad in the scripts folder to get all packages.
- Run "npm run" commad in the scripts folder to get the typings.
- Re-add node_modules and typings folder to the VS.
- Delete some compiled app code.
- Build, maybe several times.

### Possibles fixes after upgrade

- Deleting scripts/node-modules/angular2/ts folder.
- Deleting scripts/node-modules/reflect-metadata folder.