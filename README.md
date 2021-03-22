## Introduction

Reproduction for https://github.com/prisma/prisma/issues/5854


## Version Information

```
Environment variables loaded from prisma\.env
prisma               : 2.20.0-dev.18
@prisma/client       : 2.20.0-dev.18
Current platform     : windows
Query Engine         : query-engine c21eb9152ae57c9b72c1001461d44e3bc926c627 (at node_modules\@prisma\engines\query-engine-windows.e
xe)
Migration Engine     : migration-engine-cli c21eb9152ae57c9b72c1001461d44e3bc926c627 (at node_modules\@prisma\engines\migration-engi
ne-windows.exe)
Introspection Engine : introspection-core c21eb9152ae57c9b72c1001461d44e3bc926c627 (at node_modules\@prisma\engines\introspection-en
gine-windows.exe)
Format Binary        : prisma-fmt c21eb9152ae57c9b72c1001461d44e3bc926c627 (at node_modules\@prisma\engines\prisma-fmt-windows.exe)
Default Engines Hash : c21eb9152ae57c9b72c1001461d44e3bc926c627
Studio               : 0.359.0
```

## Reproduction steps

1. Clone the repository and install the deps using `yarn`
2. Initialize the SQLite data using `npx prisma migrate dev`
3. Run `yarn start` to reproduce. Script will also print the triggering date as the date is generated via chance.js
