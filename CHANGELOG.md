# Change Log

All notable changes to the **Essential ASP.NET Core Snippets** will be documented in this file.

## 3.15.2 - 2021-09-12

* Change [Code Snippets's icon](https://code.visualstudio.com/api/references/icons-in-labels) from `symbol-property` to `symbol-snippet`.
  * `completion.kind = vscode.CompletionItemKind.Snippet;`

## 3.15.1 - 2020-12-15

* Update `api-action` and `api-action-async` snippet for more practical use case
* Update `script:signalr-cdn` snippet (ref: <https://cdnjs.com/libraries/microsoft-signalr>)
* Update `script:signalr` snippet
  * `libman install @microsoft/signalr@latest -p unpkg`

## 3.14.0 - 2020-11-16

* Turn [MSBuild project tools](https://marketplace.visualstudio.com/items?itemName=tintoy.msbuild-project-tools) into a optional extension.

## 3.13.0 - 2020-10-29

* Add [EditorConfig](https://editorconfig.org/) snippets for C# project
  * `c#` or `roslyn`
  * You have to install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) extension.

## 3.12.3 - 2020-10-28

* Change  all the description property for `<T>` into `&lt;Tgt;` (HTML Entities) to display description correctly in the IntelliSense.

## 3.12.1 - 2020-10-14

* Add TODO for `services-add-spastaticfiles` snippet
  * `dotnet add package Microsoft.AspNetCore.SpaServices.Extensions`

## 3.12.0 - 2020-09-12

* Add async snippets for MVC and API
  * `api-controller-async`
  * `api-action-async`
  * `api-action-post-async`
  * `api-action-put-async`
  * `api-action-delete-async`
  * `mvc-controller-async`
  * `mvc-action-async`

## 3.11.0 - 2020-09-04

* Refactoring all DI-related snippets
  * `services-add-transient-1`
  * `services-add-transient-2`
  * `services-add-transient-3`
  * `services-add-scoped-1`
  * `services-add-scoped-2`
  * `services-add-scoped-3`
  * `services-add-singleton-1`
  * `services-add-singleton-2`
  * `services-add-singleton-3`
  * `services-add-singleton-4`

## 3.10.0 - 2020-08-18

* Add `grpc-packages` snippet in MSBuild language
* Rename `protobuf` snippet to `grpc-protobuf`

## 3.9.0 - 2020-08-15

* Add `services-configure` snippet

## 3.8.2 - 2020-08-15

* Add `aspnetcorerazor` language support
* Add `script:signalr-cdn` and `script:signalr` snippets (`cshtml`, `html`)
* Add `signalr-chat` snippet (`javascript`) for JavaScript chat sample
* Add `script:signalr-chat` snippet (`cshtml`) for JavaScript chat sample

## 3.7.0 - 2020-08-10

* Add `jwtsettings` snippet that can use in `appsettings.json`
* Update some comments and descriptions for a few snippets
  * `jwt-helpers`
  * `services-add-auth-jwt`
  * `connstr`
  * `connstr-ip`
  * `connstr-trusted`
  * `connstr-sqlite`

## 3.6.1 - 2020-08-05

* Bug fix for `ef-dbcontext-options-builder`, `ef-dbcontext-options-builder-ip`, `ef-dbcontext` and `ef-dbcontext-ip` snippets

## 3.6.0 - 2020-08-03

* Update `ef-dbcontext` snippet
  * Add `OnConfiguring()` with connection strings
* Update `ef-dbcontext-factory` snippet
  * Remove `optionsBuilder.Options` parameters by default

## 3.5.0 - 2020-08-03

* Update README
* Remove some snippet's `prefix` because these snippets are context-aware show up.

## 3.4.0 - 2020-08-02

* Add `MiddlewareExt` to the `middleware-*` snippets

## 3.3.4 - 2020-08-02

* Bug fixed (`middleware-2`)

## 3.3.1 - 2020-05-30

* Bug fixed

## 3.3.0 - 2020-05-30

* Add `jwt-helpers` snippet

## 3.2.2 - 2020-05-30

* Fixes for `msbuild` snippets not showing.

## 3.2.0 - 2020-05-29

* Add `protobuf` snippet (`proto3`)
* Add `protobuf` snippet (`msbuild`)
* Add `grpc-channel` snippet (`csharp`)

## 3.1.4 - 2019-12-25

* Add `services-add-auth-cookie` and `services-add-auth-jwt` snippets

## 3.1.3 - 2019-12-15

* Add `signalr-chat` snippet

## 3.1.2 - 2019-12-14

* Add `.SetIsOriginAllowedToAllowWildcardSubdomains()` to `services-add-cors` snippet

## 3.1.1 - 2019-12-14

* Add `services-add-cors` snippet

## 3.1.0 - 2019-12-04

* Add `connstr-sqlite` snippet

## 3.0.0 - 2019-12-02

* Most of the snippets are now triggered only in specific languages and filename.
* Updated some snippets for ASP.NET Core 3.0

## 0.2.7 - 2019-10-17

* Updated `ac-api-controller` snippet for better API developer experience.

## 0.2.5 - 2019-10-16

* Updated `connstr` snippet that end focus on the center of the connection strings section.

## 0.2.4 - 2019-05-02

* Updated `ac-api-controller` to use `ControllerBase` class [#1](https://github.com/doggy8088/netcore-snippets/pull/1)

## 0.2.3 - 2018-08-17

* Removed `ac-connstr-trusted` and `ac-connstr-ip`.  Just use `connstr-trusted` and `connstr-ip` instead.

## 0.2.2 - 2018-08-14

* Add "using Microsoft.EntityFrameworkCore;" hint in the `services-add-dbcontext` snippet.

## 0.2.1 - 2018-08-07

* Fixed: `services-add-singleton-3`

## 0.2.0 - 2018-08-07

* Fixed for `ac-program-main-full` snippet that removed some invalid code due to some Type are internal only.
* Rename `services-add*` to `services-add-*`
* Add `services-add-transient-1` snippet
* Add `services-add-transient-2` snippet
* Add `services-add-singleton-3` snippet
* Add `services-add-singleton-4` snippet
* Add `ac-middleware-1` snippet
* Add `ac-middleware-2` snippet
* Add `app-use-staticfiles` snippet
* Add `app-use-defaultfiles` snippet
* Add `app-use-directorybrowser` snippet

## 0.1.0 - 2018-08-01

* Add 4 snippets
  * `services-addmvc` - Generates `AddMvc()` in Startup.ConfigureService()
  * `services-addmvc-json-camel` - Generates `AddMvc()` with `AddJsonOptions()` using CamelCasePropertyNamesContractResolver
  * `services-addmvc-json-default` - Generates `AddMvc()` with `AddJsonOptions()` using DefaultContractResolver
  * `services-addmvc-json-converters` - Generates `AddMvc()` with `AddJsonOptions()` using custom Converters

## 0.0.1 - 2018-06-21

* Initial release (Alpha Release)
