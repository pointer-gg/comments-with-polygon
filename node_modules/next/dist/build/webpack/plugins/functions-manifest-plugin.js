"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _webpack = require("next/dist/compiled/webpack/webpack");
var _middlewarePlugin = require("./middleware-plugin");
var _constants = require("../../../shared/lib/constants");
const PLUGIN_NAME = 'FunctionsManifestPlugin';
class FunctionsManifestPlugin {
    constructor({ dev , webServerRuntime  }){
        this.dev = dev;
        this.webServerRuntime = webServerRuntime;
    }
    createAssets(compilation, assets, envPerRoute, webServerRuntime) {
        const functionsManifest = {
            version: 1,
            pages: {
            }
        };
        const infos = (0, _middlewarePlugin).getEntrypointInfo(compilation, envPerRoute, webServerRuntime);
        infos.forEach((info)=>{
            functionsManifest.pages[info.page] = {
                runtime: 'web',
                ...info
            };
        });
        const assetPath = (this.webServerRuntime ? '' : 'server/') + _constants.FUNCTIONS_MANIFEST;
        assets[assetPath] = new _webpack.sources.RawSource(JSON.stringify(functionsManifest, null, 2));
    }
    apply(compiler) {
        (0, _middlewarePlugin).collectAssets(compiler, this.createAssets.bind(this), {
            dev: this.dev,
            pluginName: PLUGIN_NAME,
            webServerRuntime: this.webServerRuntime
        });
    }
}
exports.default = FunctionsManifestPlugin;

//# sourceMappingURL=functions-manifest-plugin.js.map