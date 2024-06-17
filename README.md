# Microfrontend with Angular Native Federation

This is simple app to explore the angular native federation for developing microfrontend apps. It contains following sub apps:

- `shell`: Main application that is responsible for rendering sub apps
- `mfe1`: Test feature application. See how shared lib is imported.
- `mfe2`: Test feature application. See how shared lib is imported.
- `shared-lib`: Shared Library.

## General setup steps

- Setup the workspace

```sh
ng new [my-workspace] --no-create-application
```

- Install the shell and mfe apps

```sh
ng generate application [app-name]
ng generate application shell
ng generate application mfe1
ng generate application mfe1
```

- Optionally, generate environments

```sh
ng generate environments --project=[Project name]
ng generate environments --project=shell
```

- Install angular native federation package

```sh
npm i @angular-architects/native-federation -D
```

- Configure mfe applications as remote apps

```sh
ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
ng g @angular-architects/native-federation:init --project mfe2 --port 4202 --type remote
```

- Configure shell application as a host application

```sh
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
```

- Generate shared library app.

```sh
ng generate library [my-lib]
ng generate library shared-lib
```

## References

- [Official Angular native federation package](https://www.npmjs.com/package/@angular-architects/native-federation)

## Misc

- Update Angular version and native federation in workspace

```sh
 npx ng update @angular/core@18 @angular/cli@18
 npm install @angular-architects/native-federation@18.x
```

- For upgrading to v18, additional step was necessary. [See here](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/docs/update18.md). This would however cause issue while building up the `shared-lib` package. So, for now we need to build shared lib first, run the `postinstall` script manually and run the application. This is temporary and issue should be resolve in future version of `@angular-architects/native-federation` package.

- For library (shared-lib), update has to be done manually. [See here](https://stackoverflow.com/questions/68373297/how-to-update-an-angular-library-project)

node version: v20.14.0
