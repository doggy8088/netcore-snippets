# Essential ASP.NET Core Snippets

This extension is optimized for developers who wants to develop ASP.NET Core 2/3 and Entity Framework Core 2/3.  These code snippets contains **C#**, **MSBuild**, **Razor** and **JSON** snippets.  So you can even write your own `appsettings.json` using my code snippets in a rocket speed.

This extension is still in progress.  [Let me know](https://github.com/doggy8088/netcore-snippets/issues) if you have any suggestion! Thanks!

## Features

* Support Minimal API for ASP.NET Core 6.0+
* Guess your project's namespace when creating a API Controller
* Generates `ConnectionStrings` in `appsettings.json` quickly
* Generates constructor method by default when creating a API Controller
* Including snippets that commonly used in `Program` class
* Including snippets that commonly used in `Startup` class
* Including Entity Framework Core common code patterns
* Generates `UseSpa()` snippet for ASP.NET Core 2.1+

## Snippet Prefixes

| Prefix      | Description                           |
| ----------- | ------------------------------------- |
| nc-         | General .NET Core Snippets            |
| anc3-       | ASP.NET Core 3 Snippets               |
| api-        | ASP.NET Core Web API Snippets         |
| mvc-        | ASP.NET Core MVC Snippets             |
| services-   | ASP.NET Core Snippets in `Startup.cs` |
| app-        | ASP.NET Core Snippets in `Startup.cs` |
| middleware- | ASP․NET Core Middleware Snippets      |
| signalr-    | ASP.NET Core SignalR Snippets         |
| grpc-       | ASP․NET Core gRPC Snippets            |
| ef-         | Entity Framework Core Snippets        |
| serilog     | Serilog Snippet                       |

## ASP.NET Core Snippets

### MSBuild (`.csproj`)

| Prefix        | Description                                   |
| ------------- | --------------------------------------------- |
| anc3-default  | Generates Default ASP.NET Core 3 MSBuild file |
| grpc-protobuf | Add Protobuf property item (csproj)           |
| grpc-packages | Add gRPC-related packages (csproj)            |

### C\#

| Prefix         | Description                       |
| -------------- | --------------------------------- |
| grpc-channel   | Generate GrpcChannel.ForAddress() |
| jwt-helpers    | Generate JwtHelpers class         |
| nc-get-connstr | config.GetConnectionString()      |

### C\# (`**/Program.cs`)

* ASP.NET Core 3

    | Prefix          | Description                                        |
    | --------------- | -------------------------------------------------- |
    | anc3-program-cs | Generates basic `Program` class for ASP.NET Core 3 |

* ASP.NET Core 6

    | Prefix                           | Description                                                                                                                                                                                 |
    | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | services-configure               | Generates `builder.Services.Configure<T>()` in Program.cs                                                                                                                                   |
    | services-add-transient-1         | Generates `builder.Services.AddTransient<TService>()` in Program.cs                                                                                                                         |
    | services-add-transient-2         | Generates `builder.Services.AddTransient<IService, TImplementation>()` in Program.cs                                                                                                        |
    | services-add-transient-3         | Generates `builder.Services.AddTransient<T>(FactoryMethod)` in Program.cs                                                                                                                   |
    | services-add-scoped-1            | Generates `builder.Services.AddScoped<TService>()` in Program.cs                                                                                                                            |
    | services-add-scoped-2            | Generates `builder.Services.AddScoped<IService, TImplementation>()` in Program.cs                                                                                                           |
    | services-add-scoped-3            | Generates `builder.Services.AddScoped<T>(FactoryMethod)` in Program.cs                                                                                                                      |
    | services-add-singleton-1         | Generates `builder.Services.AddSingleton<TService>()` in Program.cs                                                                                                                         |
    | services-add-singleton-2         | Generates `builder.Services.AddSingleton<IService, TImplementation>()` in Program.cs                                                                                                        |
    | services-add-singleton-3         | Generates `builder.Services.AddSingleton<T>(FactoryMethod)` in Program.cs                                                                                                                   |
    | services-add-singleton-4         | Generates `builder.Services.AddSingleton<IService>(new TService())` in Program.cs                                                                                                           |
    | services-add-cors                | Generates `builder.Services.AddCors()` in Program.cs                                                                                                                                        |
    | services-add-sqlserver           | Generates `builder.Services.AddSqlServer()` in Program.cs                                                                                                                                   |
    | services-add-sqlite              | Generates `builder.Services.AddSqlite()` in Program.cs                                                                                                                                      |
    | services-add-dbcontext-inmemory  | Generates `builder.Services.AddDbContext()` with **UseInMemoryDatabase** in Program.cs                                                                                                      |
    | services-add-auth-cookie         | Generates `builder.Services.AddAuthentication().AddCookie()` in Program.cs                                                                                                                  |
    | services-add-auth-jwt            | Generates `builder.Services.AddAuthentication().AddJwtBearer()` in Program.cs                                                                                                               |
    | services-add-mvc                 | Generates `builder.Services.AddControllersWithViews()` in Program.cs                                                                                                                        |
    | services-add-mvc-json-default    | Generates `builder.Services.AddControllersWithViews()` with `AddJsonOptions()` using `DefaultContractResolver`                                                                              |
    | services-add-mvc-json-camel      | Generates `builder.Services.AddControllersWithViews()` with `AddJsonOptions()` using `CamelCasePropertyNamesContractResolver`                                                               |
    | services-add-mvc-json-converters | Generates `builder.Services.AddControllersWithViews()` with `AddJsonOptions()` using custom Converters                                                                                      |
    | services-add-spastaticfiles      | Generates `builder.Services.AddSpaStaticFiles()` in Program.cs                                                                                                                              |
    | app-use                          | Generates `app.Use()` in Program.cs                                                                                                                                                         |
    | app-run                          | Generates `app.Run()` in Program.cs                                                                                                                                                         |
    | app-map                          | Generates `app.Map()` in Program.cs                                                                                                                                                         |
    | app-use-spa                      | Generates `app.UseSpa()` in Program.cs                                                                                                                                                      |
    | app-use-staticfiles              | Generates `app.UseStaticFiles()` in Program.cs                                                                                                                                              |
    | app-use-defaultfiles             | Generates `app.UseDefaultFiles()` in Program.cs                                                                                                                                             |
    | app-use-directorybrowser         | Generates `app.UseDirectoryBrowser()` in Program.cs                                                                                                                                         |
    | serilog                          | Add [Serilog.AspNetCore](https://github.com/serilog/serilog-aspnetcore) to Program.cs<br>Usage: 1. Open `Program.cs` 2. Select All (`Ctrl+A`) 3. Insert Snippet 4. Choose `serilog` snippet |

### C\# (`**/Startup*.cs`)

| Prefix                           | Description                                                                                        |
| -------------------------------- | -------------------------------------------------------------------------------------------------- |
| anc3-startup-mvc                 | Generates ASP.NET Core MVC `Startup` class                                                         |
| anc3-startup-api                 | Generates ASP.NET Core Web API `Startup` class                                                     |
| services-configure               | Generates `services.Configure()` in Startup.ConfigureService()                                     |
| services-add-transient-1         | Generates `services.AddTransient<TService>()` in Startup.ConfigureService()                        |
| services-add-transient-2         | Generates `services.AddTransient<IService, TImplementation>()` in Startup.ConfigureService()       |
| services-add-transient-3         | Generates `services.AddTransient<T>(FactoryMethod)` in Startup.ConfigureService()                  |
| services-add-scoped-1            | Generates `services.AddScoped<TService>()` in Startup.ConfigureService()                           |
| services-add-scoped-2            | Generates `services.AddScoped<IService, TImplementation>()` in Startup.ConfigureService()          |
| services-add-scoped-3            | Generates `services.AddScoped<T>(FactoryMethod)` in Startup.ConfigureService()                     |
| services-add-singleton-1         | Generates `services.AddSingleton<TService>()` in Startup.ConfigureService()                        |
| services-add-singleton-2         | Generates `services.AddSingleton<IService, TImplementation>()` in Startup.ConfigureService()       |
| services-add-singleton-3         | Generates `services.AddSingleton<T>(FactoryMethod)` in Startup.ConfigureService()                  |
| services-add-singleton-4         | Generates `services.AddSingleton<IService>(new TService())` in Startup.ConfigureService()          |
| services-add-cors                | Generates `services.AddCors()` in Startup.ConfigureService()                                       |
| services-add-dbcontext           | Generates `services.AddDbContext()` with **UseSqlServer** in Startup.ConfigureService()            |
| services-add-dbcontext-inmemory  | Generates `services.AddDbContext()` with **UseInMemoryDatabase** in Startup.ConfigureService()     |
| services-add-dbcontext-sqlite    | Generates `services.AddDbContext()` with **UseSqlite** in Startup.ConfigureService()               |
| services-add-auth-cookie         | Generates `services.AddAuthentication().AddCookie()` in Startup.ConfigureService()                 |
| services-add-auth-jwt            | Generates `services.AddAuthentication().AddJwtBearer()` in Startup.ConfigureService()              |
| services-add-mvc                 | Generates `services.AddMvc()` in Startup.ConfigureService()                                        |
| services-add-mvc-json-default    | Generates `services.AddMvc()` with `AddJsonOptions()` using DefaultContractResolver                |
| services-add-mvc-json-camel      | Generates `services.AddMvc()` with `AddJsonOptions()` using CamelCasePropertyNamesContractResolver |
| services-add-mvc-json-converters | Generates `services.AddMvc()` with `AddJsonOptions()` using custom Converters                      |
| services-add-spastaticfiles      | Generates `services.AddSpaStaticFiles()` in Startup.ConfigureService()                             |
| app-use                          | Generates `app.Use()` in Startup.Configure()                                                       |
| app-run                          | Generates `app.Run()` in Startup.Configure()                                                       |
| app-map                          | Generates `app.Map()` in Startup.Configure()                                                       |
| app-use-spa                      | Generates `app.UseSpa()` in Startup.Configure()                                                    |
| app-use-staticfiles              | Generates `app.UseStaticFiles()` in Startup.Configure()                                            |
| app-use-defaultfiles             | Generates `app.UseDefaultFiles()` in Startup.Configure()                                           |
| app-use-directorybrowser         | Generates `app.UseDirectoryBrowser()` in Startup.Configure()                                       |

### C\# (`**/*Controller.cs`)

| Prefix                  | Description                          |
| ----------------------- | ------------------------------------ |
| api-controller          | Generates API Controller             |
| api-action              | Generates API Action: GET            |
| api-action-post         | Generates API Action: POST           |
| api-action-put          | Generates API Action: PUT            |
| api-action-delete       | Generates API Action: DELETE         |
| api-controller-async    | Generates async API Async Controller |
| api-action-async        | Generates async API Action: GET      |
| api-action-post-async   | Generates async API Action: POST     |
| api-action-put-async    | Generates async API Action: PUT      |
| api-action-delete-async | Generates async API Action: DELETE   |
| mvc-controller          | Generates MVC Controller             |
| mvc-controller-async    | Generates async MVC Controller       |
| mvc-action              | Generates MVC Action                 |
| mvc-action-async        | Generates async MVC Async Action     |

### C\# (`**/*Middleware.cs`)

| Prefix       | Description                                     |
| ------------ | ----------------------------------------------- |
| middleware-1 | Generates Middleware class by convention        |
| middleware-2 | Generates Middleware class by using IMiddleware |

### C\# (`**/*Hub.cs`) (SignalR)

| Prefix       | Description                           |
| ------------ | ------------------------------------- |
| signalr-chat | Generates SignalR ChatHub sample code |

### Razor (`**/*.cshtml`)

| Prefix                     | Description                                                                |
| -------------------------- | -------------------------------------------------------------------------- |
| environment                | Generates `<environment include="">` block (Triggered by `<` and `env` )   |
| environment-exclude        | Generates `<environment exclude="">` block (Triggered by `<` and `envex` ) |
| @environment               | Generates `<environment include="">` block (Include surrounding snippet)   |
| @environment-exclude       | Generates `<environment exclude="">` block (Include surrounding snippet)   |
| @inject                    | Generates @inject block                                                    |
| @model                     | Generates @model usage in Razor page                                       |
| @if                        | Generates if statement in Razor page                                       |
| @foreach                   | Generates foreach statement in Razor page                                  |
| @for                       | Generates for statement in Razor page                                      |
| @ViewBag                   | Generates ViewBag usage in Razor page                                      |
| @ViewData                  | Generates ViewData usage in Razor page                                     |
| @TempData                  | Generates TempData usage in Razor page                                     |
| @RenderSection             | Generates @RenderSection usage in Razor page (Layout)                      |
| @section                   | Generates @section usage in Razor page                                     |
| @Html.ActionLink           | Generates ASP.NET Core MVC Html Helper with ActionLink                     |
| @Html.Action               | Generates ASP.NET Core MVC Html Helper with Action                         |
| @Html.Partial              | Generates ASP.NET Core MVC Html Helper with Partial                        |
| @Html.BeginForm            | Generates ASP.NET Core MVC Html Helper with BeginForm                      |
| @Html.BeginForm-enctype    | Generates ASP.NET Core MVC Html Helper with BeginForm (for FileUpload)     |
| @Html.AntiForgeryToken     | Generates ASP.NET Core MVC Html Helper with AntiForgeryToken               |
| @Html.Id                   | Generates ASP.NET Core MVC Html Helper with Id                             |
| @Html.Name                 | Generates ASP.NET Core MVC Html Helper with Name                           |
| @Html.Value                | Generates ASP.NET Core MVC Html Helper with Value                          |
| @Html.ValidationSummary    | Generates ASP.NET Core MVC Html Helper with ValidationSummary              |
| @Html.DropDownList         | Generates ASP.NET Core MVC Html Helper with DropDownList                   |
| @Html.ListBox              | Generates ASP.NET Core MVC Html Helper with ListBox                        |
| @Html.CheckBox             | Generates ASP.NET Core MVC Html Helper with CheckBox                       |
| @Html.Label                | Generates ASP.NET Core MVC Html Helper with Label                          |
| @Html.TextBox              | Generates ASP.NET Core MVC Html Helper with TextBox                        |
| @Html.TextArea             | Generates ASP.NET Core MVC Html Helper with TextArea                       |
| @Html.Password             | Generates ASP.NET Core MVC Html Helper with Password                       |
| @Html.RadioButton          | Generates ASP.NET Core MVC Html Helper with RadioButton                    |
| @Html.Hidden               | Generates ASP.NET Core MVC Html Helper with Hidden                         |
| @Html.IdFor                | Generates ASP.NET Core MVC Html Helper with IdFor                          |
| @Html.NameFor              | Generates ASP.NET Core MVC Html Helper with NameFor                        |
| @Html.ValueFor             | Generates ASP.NET Core MVC Html Helper with ValueFor                       |
| @Html.ValidationSummaryFor | Generates ASP.NET Core MVC Html Helper with ValidationSummaryFor           |
| @Html.DropDownListFor      | Generates ASP.NET Core MVC Html Helper with DropDownListFor                |
| @Html.ListBoxFor           | Generates ASP.NET Core MVC Html Helper with ListBoxFor                     |
| @Html.CheckBoxFor          | Generates ASP.NET Core MVC Html Helper with CheckBoxFor                    |
| @Html.LabelFor             | Generates ASP.NET Core MVC Html Helper with LabelFor                       |
| @Html.TextBoxFor           | Generates ASP.NET Core MVC Html Helper with TextBoxFor                     |
| @Html.TextAreaFor          | Generates ASP.NET Core MVC Html Helper with TextAreaFor                    |
| @Html.PasswordFor          | Generates ASP.NET Core MVC Html Helper with PasswordFor                    |
| @Html.RadioButtonFor       | Generates ASP.NET Core MVC Html Helper with RadioButtonFor                 |
| @Html.HiddenFor            | Generates ASP.NET Core MVC Html Helper with HiddenFor                      |
| @Html.DisplayName          | Generates ASP.NET Core MVC Html Helper with DisplayName                    |
| @Html.Display              | Generates ASP.NET Core MVC Html Helper with Display                        |
| @Html.Editor               | Generates ASP.NET Core MVC Html Helper with Editor                         |
| @Html.DisplayNameFor       | Generates ASP.NET Core MVC Html Helper with DisplayNameFor                 |
| @Html.DisplayFor           | Generates ASP.NET Core MVC Html Helper with DisplayFor                     |
| @Html.EditorFor            | Generates ASP.NET Core MVC Html Helper with EditorFor                      |
| @Html.DisplayForModel      | Generates ASP.NET Core MVC Html Helper with DisplayForModel                |
| @Html.EditorForModel       | Generates ASP.NET Core MVC Html Helper with EditorForModel                 |
| @Url.Action                | Generates ASP.NET Core MVC Url Helper with Action                          |
| script:signalr             | Generates `<script src="...">` that load SignalR client script             |
| script:signalr-cdn         | Generates `<script src="...">` that load SignalR client script from CDN    |
| script:signalr-chat        | Generates SignalR ChatHub sample code for JavaScript                       |

### HTML (`**/*.{htm,html}`)

| Prefix             | Description                                                             |
| ------------------ | ----------------------------------------------------------------------- |
| script:signalr-cdn | Generates `<script src="...">` that load SignalR client script from CDN |

### JavaScript (`**/*.js`)

| Prefix       | Description                                          |
| ------------ | ---------------------------------------------------- |
| signalr-chat | Generates SignalR ChatHub sample code for JavaScript |

### JSON (`**/appsettings*.json`)

| Prefix          | Description                                                 |
| --------------- | ----------------------------------------------------------- |
| appsettings     | Generates `appsettings.json` template                       |
| logging         | Generates more `Logging` settings                           |
| jwtsettings     | Generates `JwtSettings` section for `jwt-helpers` snippet   |
| connstr         | Generates `ConnectionStrings` section                       |
| connstr-trusted | Generates `ConnectionStrings` item with Integrated Security |
| connstr-ip      | Generates `ConnectionStrings` item with IP_Connection       |
| connstr-sqlite  | Generates `ConnectionStrings` item with SQLite connection   |

### Proto3 (gRPC)

| Prefix   | Description                    |
| -------- | ------------------------------ |
| protobuf | Generates sample protobuf file |

## Entity Framework Core Snippets

### C\# (DbContextOptionsBuilder)

| Prefix                          | Description                                                       |
| ------------------------------- | ----------------------------------------------------------------- |
| ef-dbcontext-options-builder    | new `DbContextOptionsBuilder()` with Connection Strings (Trusted) |
| ef-dbcontext-options-builder-ip | new `DbContextOptionsBuilder()` with Connection Strings (IP)      |

### C\# (`**/*Context.cs`) (`**/*Entities.cs`)

| Prefix       | Description                                         |
| ------------ | --------------------------------------------------- |
| ef-dbcontext | Generates DbContext class for Entity Framework Core |

### C\# (`**/*ContextFactory.cs`)

| Prefix                       | Description                                                           |
| ---------------------------- | --------------------------------------------------------------------- |
| ef-dbcontext-factory         | Generates IDesignTimeDbContextFactory class for Entity Framework Core |
| ef-dbcontext-factory-ip      | Generates IDesignTimeDbContextFactory class for Entity Framework Core |
| ef-dbcontext-factory-trusted | Generates IDesignTimeDbContextFactory class for Entity Framework Core |

## Misc

### EditorConfig Snippets (`.editorconfig`)

| Prefix | Description                                       |
| ------ | ------------------------------------------------- |
| c#     | Generates `.editorconfig` for Roslyn (C#) project |
| roslyn | Generates `.editorconfig` for Roslyn (C#) project |

## Contributing

If you need any ASP.NET Core / Entity Framework Core snippets, please feel free to send PRs to me or simply [drop me a note](https://github.com/doggy8088/netcore-snippets/issues)! 😊

## Build & Test

```sh
npm run build
```

Just hit `F5` in the Visual Studio Code.

---

**Enjoy!**
