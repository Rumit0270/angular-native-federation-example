# Microfrontend with Angular Native Federation

This is simple app to explore the angular native federation for developing microfrontend apps. It contains following sub apps:

- `shell`: Main application that is responsible for rendering sub apps
- `mfe1`: Test feature application
- `mfe2`: Test feature application
- `shared-lib`: Shared Library

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

- Create root-level and feature modules tailored for Micro Frontend (MFE) applications. While Angular 17 typically generates standalone components by default, this approach can be cumbersome to configure for MFE applications. Instead, transform the root app component into a non-standalone component and establish both the app and feature modules. The feature module will be exported as a remote module for consumption by the shell app. This setup is necessary as exporting AppModule directly is not feasible. AppModule typically contains one-time configurations, and importing it directly would lead to duplicate execution of these logics.

```sh
ng generate module app --project=mfe1 --flat
ng generate module app --project=mfe2 --flat
ng g module feature --project=mfe1 --flat
ng g module feature --project=mfe2 --flat
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

- For upgrading to v18, additional step was necessary. [See here](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/docs/update18.md). This would however cause issue while building up the `shared-lib` package. So, for now we need to build shared lib first, run the `postinstall` script manually and run the application.

- For library (shared-lib), update has to be done manually. [See here](https://stackoverflow.com/questions/68373297/how-to-update-an-angular-library-project)

node version: v20.14.0
