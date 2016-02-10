using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Orchard.UI.Resources;

namespace Orchard.Angular2
{
    public class ResourceManifest : IResourceManifestProvider
    {
        public void BuildManifests(ResourceManifestBuilder builder)
        {
            var manifest = builder.Add();

            manifest.DefineScript("Es6Shim").SetUrl("es6-shim/es6-shim.min.js");
            manifest.DefineScript("SystemPolyfills").SetUrl("systemjs/dist/system-polyfills.js");
            manifest.DefineScript("Angular2Polyfills").SetUrl("angular2/bundles/angular2-polyfills.min.js");
            manifest.DefineScript("SystemJs").SetUrl("systemjs/dist/system.src.js");
            manifest.DefineScript("RxJs").SetUrl("rxjs/bundles/Rx.min.js");
            manifest.DefineScript("Angular2").SetUrl("angular2/bundles/angular2.dev.js").SetDependencies("Es6Shim", "SystemPolyfills", "Angular2Polyfills", "SystemJs", "RxJs");
        }
    }
}