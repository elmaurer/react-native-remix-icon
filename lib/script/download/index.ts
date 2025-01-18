import {RemixIconDownloader} from "./RemixIconDownloader";

// @ts-ignore
const remixIconDownloader = new RemixIconDownloader(process.argv[2]);

remixIconDownloader.init();