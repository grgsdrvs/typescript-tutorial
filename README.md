# typescript-tutorial 

[Link to tutorial](https://www.youtube.com/watch?v=BwuLxPH8IDs&list=WL&index=31)

## Commands

* `tsc --init` => creates configuration file, `tsconfig.json`. After this file is available run `tsc` to compile all .ts files in the project.

* `tsc app.ts -w` => watched single file

### tsconfig

* In order to not compile all .ts files add  ´"exclude": []´

* `"exclude": [
    "node_modules",
    "**/*.dev.ts"
  ]` will exclude all files in all folders with `.dev.ts` included and also the node_modules-folder.
* The asterisk * is the wildcard operator.
* In both the exclude-option and include-option specific files can be listed.
* When compilation is done the files are selected from "include-exclude".
* `"lib": [
      "DOM",
      "ES6",
      "DOM.Iterable",
      "ScriptHost"
      ],` is the default libs inculded for ES6.

* In order to make debugging easier in the browser set `"sourceMap": true`. This will create .map files to make the TS-files available directly in the Sources-tab in DevTools.

* User `outDir` and `rootDir` for file organization, i.e. defining where ts-files and the compiled filed should be placed. Example: ´
`"outDir": "./dist"
"rootDir": "./src",`

* `"noEmitOnError": true` will not generate any js-files if there is an error in some ts-file.
### Other

* Exclamation point `!` is used to declare that a certain expression is not-null. Me as a developer are sure that it's not null and therefore instructs TS to not accept the expression.   
Example: `const button = document.querySelector('button')!;`. If `"strictNullChecks": false,` in tsconfig this is not needed.