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