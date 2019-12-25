# Essential ASP.NET Core 3 Snippets

This extension is optimized for developers who wants to develop ASP.NET Core 2/3 and Entity Framework Core 2/3.  These code snippets contains **C#**, **MSBuild**, **Razor** and **JSON** snippets.  So you can even write your own `appsettings.json` using my code snippets in a rocket speed.

This extension is still in progress.  [Let me know](https://github.com/doggy8088/netcore-snippets/issues) if you have any suggestion! Thanks!

## Features

* Guess your project's namespace when creating a API Controller
* Generates `ConnectionStrings` in `appsettings.json` quickly
* Generates constructor method by default when creating a API Controller
* Including common usages in `Startup` class
* Including Entity Framework Core common code patterns
* Generates `UseSpa()` snippet for ASP.NET Core 2.1

## Snippet Prefixes

| Prefix    | Description                           |
| --------- | ------------------------------------- |
| nc-       | General .NET Core Snippets            |
| ac-       | General ASP.NET Core Snippets         |
| anc3-     | ASP.NET Core 3 Snippets               |
| services- | ASP.NET Core Snippets in `Startup.cs` |
| app-      | ASP.NET Core Snippets in `Startup.cs` |
| ef-       | Entity Framework Core Snippets        |
| signalr-  | ASP.NET Core SignalR Snippets         |

## ASP.NET Core Snippets

### MSBuild (`.csproj`)

| Prefix       | Description                                   |
| ------------ | --------------------------------------------- |
| anc3-default | Generates Default ASP.NET Core 3 MSBuild file |

### C\#

| Prefix                           | Description                                                                               |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| anc3-program-cs                  | Generates basic `Program` class for ASP.NET Core 3                                        |
| anc3-startup-mvc                 | Generates ASP.NET Core MVC `Startup` class                                                |
| anc3-startup-api                 | Generates ASP.NET Core Web API `Startup` class                                            |
| services-add-cors                | Generates `AddCors()` in Startup.ConfigureService()                                       |
| services-add-dbcontext           | Generates `AddDbContext()` with **UseSqlServer** in Startup.ConfigureService()           |
| services-add-dbcontext-inmemory  | Generates `AddDbContext()` with **UseInMemoryDatabase** in Startup.ConfigureService()    |
| services-add-auth-cookie         | Generates `AddAuthentication().AddCookie()` in Startup.ConfigureService()                 |
| services-add-auth-jwt            | Generates `AddAuthentication().AddJwtBearer()` in Startup.ConfigureService()              |
| services-add-mvc                 | Generates `AddMvc()` in Startup.ConfigureService()                                        |
| services-add-mvc-json-default    | Generates `AddMvc()` with `AddJsonOptions()` using DefaultContractResolver                |
| services-add-mvc-json-camel      | Generates `AddMvc()` with `AddJsonOptions()` using CamelCasePropertyNamesContractResolver |
| services-add-mvc-json-converters | Generates `AddMvc()` with `AddJsonOptions()` using custom Converters                      |
| services-add-spastaticfiles      | Generates `AddSpaStaticFiles()` in Startup.ConfigureService()                             |
| services-add-singleton-1         | Generates `AddSingleton<I, T>()` in Startup.ConfigureService()                            |
| services-add-singleton-2         | Generates `AddSingleton<I>(T)` in Startup.ConfigureService()                              |
| services-add-singleton-3         | Generates `AddSingleton<I>(NewInstance)` in Startup.ConfigureService()                    |
| services-add-transient-1         | Generates `AddTransient<I, T>()` with Interface                                           |
| services-add-transient-2         | Generates `AddTransient<T, T>()` with Class                                               |
| services-add-scoped              | Generates `AddScoped<I, T>()` in Startup.ConfigureService()                               |
| app-use                          | Generates `app.Use()`                                                                     |
| app-run                          | Generates `app.Run()`                                                                     |
| app-map                          | Generates `app.Map()`                                                                     |
| app-use-spa                      | Generates `UseSpa()` in Startup.Configure()                                               |
| app-use-staticfiles              | Generates app.UseStaticFiles() with sample code                                           |
| app-use-defaultfiles             | Generates app.UseDefaultFiles() with sample code                                          |
| app-use-directorybrowser         | Generates app.UseDirectoryBrowser() with sample code                                      |
| ac-api-controller                | Generates an API Controller class                                                         |
| ac-api-action                    | Generates an API Action: GET                                                              |
| ac-api-action-post               | Generates an API Action: POST                                                             |
| ac-api-action-put                | Generates an API Action: PUT                                                              |
| ac-api-action-delete             | Generates an API Action: DELETE                                                           |
| ac-mvc-action                    | Generates a MVC Action                                                                    |
| ac-mvc-action-async              | Generates a MVC Async Action                                                              |
| ac-middleware-1                  | Generates Middleware class by convention                                                  |
| ac-middleware-2                  | Generates Middleware class by using IMiddleware                                           |
| signalr-chat                     | Generates SignalR ChatHub sample code                                                     |

### Razor

| Prefix                     | Description                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- |
| environment                | Generates an `<environment include="">` block (Triggered by `<` and `env` )   |
| environment-exclude        | Generates an `<environment exclude="">` block (Triggered by `<` and `envex` ) |
| @environment               | Generates an `<environment include="">` block (Include surrounding snippet)   |
| @environment-exclude       | Generates an `<environment exclude="">` block (Include surrounding snippet)   |
| @inject                    | Generates an @inject block                                                    |
| @model                     | Generates @model usage in Razor page                                          |
| @if                        | Generates if statement in Razor page                                          |
| @foreach                   | Generates foreach statement in Razor page                                     |
| @for                       | Generates for statement in Razor page                                         |
| @ViewBag                   | Generates ViewBag usage in Razor page                                         |
| @ViewData                  | Generates ViewData usage in Razor page                                        |
| @TempData                  | Generates TempData usage in Razor page                                        |
| @RenderSection             | Generates @RenderSection usage in Razor page (Layout)                         |
| @section                   | Generates @section usage in Razor page                                        |
| @Html.ActionLink           | Generates a ASP.NET Core MVC Html Helper with ActionLink                      |
| @Html.Action               | Generates a ASP.NET Core MVC Html Helper with Action                          |
| @Html.Partial              | Generates a ASP.NET Core MVC Html Helper with Partial                         |
| @Html.BeginForm            | Generates a ASP.NET Core MVC Html Helper with BeginForm                       |
| @Html.BeginForm-enctype    | Generates a ASP.NET Core MVC Html Helper with BeginForm (for FileUpload)      |
| @Html.AntiForgeryToken     | Generates a ASP.NET Core MVC Html Helper with AntiForgeryToken                |
| @Html.Id                   | Generates a ASP.NET Core MVC Html Helper with Id                              |
| @Html.Name                 | Generates a ASP.NET Core MVC Html Helper with Name                            |
| @Html.Value                | Generates a ASP.NET Core MVC Html Helper with Value                           |
| @Html.ValidationSummary    | Generates a ASP.NET Core MVC Html Helper with ValidationSummary               |
| @Html.DropDownList         | Generates a ASP.NET Core MVC Html Helper with DropDownList                    |
| @Html.ListBox              | Generates a ASP.NET Core MVC Html Helper with ListBox                         |
| @Html.CheckBox             | Generates a ASP.NET Core MVC Html Helper with CheckBox                        |
| @Html.Label                | Generates a ASP.NET Core MVC Html Helper with Label                           |
| @Html.TextBox              | Generates a ASP.NET Core MVC Html Helper with TextBox                         |
| @Html.TextArea             | Generates a ASP.NET Core MVC Html Helper with TextArea                        |
| @Html.Password             | Generates a ASP.NET Core MVC Html Helper with Password                        |
| @Html.RadioButton          | Generates a ASP.NET Core MVC Html Helper with RadioButton                     |
| @Html.Hidden               | Generates a ASP.NET Core MVC Html Helper with Hidden                          |
| @Html.IdFor                | Generates a ASP.NET Core MVC Html Helper with IdFor                           |
| @Html.NameFor              | Generates a ASP.NET Core MVC Html Helper with NameFor                         |
| @Html.ValueFor             | Generates a ASP.NET Core MVC Html Helper with ValueFor                        |
| @Html.ValidationSummaryFor | Generates a ASP.NET Core MVC Html Helper with ValidationSummaryFor            |
| @Html.DropDownListFor      | Generates a ASP.NET Core MVC Html Helper with DropDownListFor                 |
| @Html.ListBoxFor           | Generates a ASP.NET Core MVC Html Helper with ListBoxFor                      |
| @Html.CheckBoxFor          | Generates a ASP.NET Core MVC Html Helper with CheckBoxFor                     |
| @Html.LabelFor             | Generates a ASP.NET Core MVC Html Helper with LabelFor                        |
| @Html.TextBoxFor           | Generates a ASP.NET Core MVC Html Helper with TextBoxFor                      |
| @Html.TextAreaFor          | Generates a ASP.NET Core MVC Html Helper with TextAreaFor                     |
| @Html.PasswordFor          | Generates a ASP.NET Core MVC Html Helper with PasswordFor                     |
| @Html.RadioButtonFor       | Generates a ASP.NET Core MVC Html Helper with RadioButtonFor                  |
| @Html.HiddenFor            | Generates a ASP.NET Core MVC Html Helper with HiddenFor                       |
| @Html.DisplayName          | Generates a ASP.NET Core MVC Html Helper with DisplayName                     |
| @Html.Display              | Generates a ASP.NET Core MVC Html Helper with Display                         |
| @Html.Editor               | Generates a ASP.NET Core MVC Html Helper with Editor                          |
| @Html.DisplayNameFor       | Generates a ASP.NET Core MVC Html Helper with DisplayNameFor                  |
| @Html.DisplayFor           | Generates a ASP.NET Core MVC Html Helper with DisplayFor                      |
| @Html.EditorFor            | Generates a ASP.NET Core MVC Html Helper with EditorFor                       |
| @Html.DisplayForModel      | Generates a ASP.NET Core MVC Html Helper with DisplayForModel                 |
| @Html.EditorForModel       | Generates a ASP.NET Core MVC Html Helper with EditorForModel                  |
| @Url.Action                | Generates a ASP.NET Core MVC Url Helper with Action                           |

### JSON (`appsettings.json`)

| Prefix          | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| ac-appsettings  | Generates appsettings.json template                             |
| ac-logging      | Generates more Logging settings                                 |
| connstr         | Generates a `ConnectionStrings` section with Trusted_Connection |
| connstr-trusted | Generates a `ConnectionStrings` item with Trusted_Connection    |
| connstr-ip      | Generates a `ConnectionStrings` item with IP_Connection         |
| connstr-sqlite  | Generates a `ConnectionStrings` item with SQLite connection     |

## Entity Framework Core Snippets

### C\#

| Prefix               | Description                                                              |
| -------------------- | ------------------------------------------------------------------------ |
| ef-dbcontext         | Generates an DbContext class for Entity Framework Core                   |
| ef-dbcontext-factory | Generates an IDesignTimeDbContextFactory class for Entity Framework Core |

### JSON

| Prefix          | Description                                                           |
| --------------- | --------------------------------------------------------------------- |
| connstr         | Generates a `ConnectionStrings` section in a JSON file                |
| connstr-trusted | Generates a `ConnectionStrings` item with Trusted_Connection template |
| connstr-ip      | Generates a `ConnectionStrings` item with IP_Connection template      |

## Contributing

If you need any ASP.NET Core / Entity Framework Core snippets, please feel free to send PRs to me or simply [drop me a note](https://github.com/doggy8088/netcore-snippets/issues)! 😊

**Enjoy!**
