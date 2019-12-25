# Change Log

All notable changes to the **Essential ASP.NET Core Snippets** will be documented in this file.

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
