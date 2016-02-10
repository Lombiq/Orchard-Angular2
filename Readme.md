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