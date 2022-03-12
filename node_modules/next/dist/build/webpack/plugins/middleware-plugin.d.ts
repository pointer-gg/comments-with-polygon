import { webpack5 } from 'next/dist/compiled/webpack/webpack';
export declare const ssrEntries: Map<string, {
    requireFlightManifest: boolean;
}>;
export interface MiddlewareManifest {
    version: 1;
    sortedMiddleware: string[];
    clientInfo: [location: string, isSSR: boolean][];
    middleware: {
        [page: string]: {
            env: string[];
            files: string[];
            name: string;
            page: string;
            regexp: string;
        };
    };
}
export declare function getEntrypointInfo(compilation: webpack5.Compilation, envPerRoute: Map<string, string[]>, webServerRuntime: boolean): {
    env: string[];
    files: string[];
    name: string;
    page: string;
    regexp: string;
}[];
export default class MiddlewarePlugin {
    dev: boolean;
    webServerRuntime: boolean;
    constructor({ dev, webServerRuntime, }: {
        dev: boolean;
        webServerRuntime: boolean;
    });
    createAssets(compilation: webpack5.Compilation, assets: any, envPerRoute: Map<string, string[]>, webServerRuntime: boolean): void;
    apply(compiler: webpack5.Compiler): void;
}
export declare function collectAssets(compiler: webpack5.Compiler, createAssets: (compilation: webpack5.Compilation, assets: any, envPerRoute: Map<string, string[]>, webServerRuntime: boolean) => void, options: {
    dev: boolean;
    pluginName: string;
    webServerRuntime: boolean;
}): void;
