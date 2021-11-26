# Project Name (eg. oner)

> The Monorepo. All independent projects are located in the "packages" folder. All projects are linked with lerna tool and share modules between each other with symlinks.

# Yarn workspaces
### Starts a single project on localhost

### Starts core project
```
yarn workspace @oner/core start 
``` 
### Alternatively
```
lerna run --scope=@oner/core start 
``` 

### Add a new package eg. "eslint" to one of sub-projects
```
lerna add eslint --scope=@oner/core 
``` 

# Lerna commands

### Starts "yarn install" in all packages
```
yarn lerna:bootstrap 
``` 

### Starts all lerna projects at once
```
yarn lerna:start 
``` 

### Creates a build in the dist folder in all packages
```
yarn lerna:build 
``` 

### Links all packages at the start
```
yarn lerna:link 
```

### Prints local environment info
```
yarn lerna:info 
```

### Checks linting in all packages
```
yarn lerna:lint 
```

# Lerna flags

### Output from the process
```
--stream
``` 

### Sets multiple processes at the same time
```
--parallel
``` 
