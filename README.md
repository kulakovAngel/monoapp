# Guide how to create a monorepository.

> Tools: [node.js](https://nodejs.org) with npm, [lerna](https://lerna.js.org).

Project description and directories structure:
- front - web-ui with [react](https://reactjs.org).
- back - app with [express](https://expressjs.com) server.
- utils - global helpers, utils and tools lib.
- variables - some global app variables and constants.

### Prepare:
```Shell
npm intall -g lerna
lerna init
lerna create back
lerna create front
lerna create utils
lerna create variables
```

### Add to `back` and `front` modules *package.json*:
```JSON
"dependencies": {
    "@monoapp/utils": "*",
    "@monoapp/variables": "*"
}
```

### Link it:
```Shell
lerna link
lerna bootstrap
```

### Start it:
```Shell
lerna run start
```


Use [lerna add <package>[@version] [--dev] [--exact] [--peer]](https://github.com/lerna/lerna/tree/main/commands/add#readme) to add package. For example, `lerna add jest --dev` or `lerna add @monoapp/my-new-local-module`.