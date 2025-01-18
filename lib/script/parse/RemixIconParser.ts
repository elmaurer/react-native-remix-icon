import {transform} from "@svgr/core";
import * as fs from "node:fs";
import * as path from "node:path";

export class RemixIconParser {
    private _dir = './script/assets/remix-icon';
    private _filePaths: string[] = [];
    private _originalFileNames: string[] = [];
    private _pascalCaseFileNames: string[] = [];

    constructor() {
    }

    public async init() {
        await this.readFilesRecursively(this._dir)
        await this.parseFiles();
        this.generateTypes();
        this.generateIndexWithNamedExports();
    }

    private async readFilesRecursively(folderPath: string) {
        const items = fs.readdirSync(folderPath);

        items.forEach((item) => {
            const fullPath = path.join(folderPath, item);
            const stats = fs.statSync(fullPath);

            if (stats.isDirectory()) {
                this.readFilesRecursively(fullPath)
            } else if (stats.isFile()) {
                this._filePaths.push(fullPath);
            }
        })
    }

    private getOriginalFileName(path: string): string {
        const splittedPath = path.split('\\');
        return splittedPath[splittedPath.length - 1].replace('.svg', '');
    }

    public toPascalCase(value: string): string {
        return value
            .split('-') // Split the string by the delimiter '-'
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter of each word
            .join(''); // Join them back together without spaces
    }

    private async parseFile(path: string) {
        try {
            const svgCode = fs.readFileSync(path, 'utf8');

            const originalFileName = this.getOriginalFileName(path);
            const pascalCaseFileName = this.toPascalCase(originalFileName);

            const componentCode = await transform(svgCode, {
                typescript: true,
                plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
                icon: true,
                native: true,
                exportType: 'named',
                namedExport: pascalCaseFileName,
                svgProps: {
                    color: '#000',
                },
                svgoConfig: {
                    plugins: [
                        "removeXMLNS"
                    ]
                }
            }, {
                componentName: 'RemixIcon',
            });

            fs.writeFileSync(`./src/Icons/${pascalCaseFileName}.tsx`, componentCode, 'utf8');

            this._originalFileNames.push(originalFileName);
            this._pascalCaseFileNames.push(pascalCaseFileName);
        } catch (error) {
            console.error(path, 'failed!');
        }
    }

    private async parseFiles() {
        for (const file of this._filePaths) {
            await this.parseFile(file);
        }
    }

    private generateTypes = () => {
        const iconTypesTemplate = `
        //do not edit, this file is auto-generated!
        
        import {SvgProps} from "react-native-svg";
        
        export type IconName = ${this._originalFileNames.map(name => `'${name}'`).join(' |\n ')};
        
        export type IconProps = {
            iconName: IconName;
        } & SvgProps;
        `;

        fs.writeFileSync('./src/Icon.types.ts', iconTypesTemplate, 'utf8')
    }

    private generateIndexWithNamedExports = () => {
        const indexWithNamedExportsTemplate = this._pascalCaseFileNames.map(name => `export * from "./${name}";`).join('\n')

        fs.writeFileSync('./src/Icons/index.ts', indexWithNamedExportsTemplate, 'utf8')
    }
}