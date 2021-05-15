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
  ]` will exclude all files in all folders with `.dev.ts` included
* The asterisk * is the wildcard operator.
* in both the exclude and include specific files can be listed.