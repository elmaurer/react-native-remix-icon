import * as unzipper from "unzipper";
import {Readable} from "node:stream";
import * as fs from "node:fs";

export class RemixIconDownloader {
    private _url: string;
    private _zip = './script/assets/remix-icon.zip'
    private _dir = './script/assets/remix-icon'

    constructor(url: string) {
        this._url = url;
    }

    public async init() {
        await this.downloadAssets();
        await this.unzipAsset()
    }

    public downloadAssets() {
        return new Promise(async (resolve) => {
            const response = await fetch(this._url);
            if (response.ok && response.body) {
                let writer = fs.createWriteStream(this._zip);
                //@ts-ignore
                Readable.fromWeb(response.body).pipe(writer).on('finish', () => {
                    resolve(true);
                });
            }
        })
    }

    public async unzipAsset() {
        const directory = await unzipper.Open.file(this._zip);
        console.log(directory);
        await directory.extract({path: this._dir});
    }
}