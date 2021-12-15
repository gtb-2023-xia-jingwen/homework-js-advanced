## Definition of *Done*

* All unit tests are passed.
* There is no *linting* error.

## Hint

### install dependencies

```bash
npm install
```

### Running Unit Test

If you want to run all the unit test, you can run:

```bash
npm test
```

If you want to run a single test, you can run:

```bash
npm test -t fileName
```

For example.

```bash
npm test -t array_spec.js
```
more information about `--testNamePattern=<regex>` : https://jestjs.io/docs/cli#--testnamepatternregex

### 启动 Json Server 

```
npm run server
```
启动json server后可以通过以下 URL 获取 api 资源:   
`http://localhost:3000/api`

### Linting Your Code

You can use the following command to check if your code violates the coding standard:

```bash
$ npm run lint
```
