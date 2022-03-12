import { webpack5 } from 'next/dist/compiled/webpack/webpack';
export interface FunctionsManifest {
    version: 1;
    pages: {
        [page: string]: {
            runtime: string;
            env: string[];
            files: string[];
            name: string;
            page: string;
            regexp: string;
        };
    };
}
export default class FunctionsManifestPlugin {
    dev: boolean;
    webServerRuntime: boolean;
    constructor({ dev, webServerRuntime, }: {
        dev: boolean;
        webServerRuntime: boolean;
    });
    createAssets(compilation: webpack5.Compilation, assets: any, envPerRoute: Map<string, string[]>, webServerRuntime: boolean): void;
    apply(compiler: webpack5.Compiler): void;
}
