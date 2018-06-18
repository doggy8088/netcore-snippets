# Essential ASP.NET Core Snippets

This extension is optimized for developers who wants to develop ASP.NET Core 2 and Entity Framework Core 2.  These code snippets contains **C#** and **JSON** snippets.  So you can even write your own `appsettings.json` using my code snippets in a rocket speed.

This extension is still in progress.  [Let me know](https://github.com/doggy8088/netcore-snippets/issues) if you have any suggestion! Thanks!

## Features

* Guess your project's namespace when creating a API Controller
* Add constructor method when creating a API Controller
* Create `ConnectionStrings` in `appsettings.json` quickly
* Including common usages in `Startup` class
* Including Entity Framework Core common code patterns
* Createing `UseSpa()` snippet for ASP.NET Core 2.1

## Snippet Prefixes

| Prefix  | Description                    |
| ------- | -------------------------------|
| ac-     | ASP.NET Core Snippets          |
| ef-     | Entity Framework Core Snippets |

## ASP.NET Core Snippets

### MSBuild (`.csproj`)

| Prefix               | Description                                  |
| -------------------- | -------------------------------------------- |
| ac-csproj            | Create Default ASP.NET Core 2 MSBuild file   |

### C\#

| Prefix                       | Description                                                  |
| ---------------------------- | ------------------------------------------------------------ |
| ac-program-cs                | Create a basic `Program` class                               |
| ac-program-main              | Create `Main()` method in `Program`                          |
| ac-program-main-full         | Create `Main()` method in `Program` with full pipeline       |
| ac-startup                   | Create a basic `Startup` class                               |
| ac-app-use                   | app.Use()                                                    |
| ac-app-run                   | app.Run()                                                    |
| ac-app-map                   | app.Map()                                                    |
| ac-svc-adddbcontext          | AddDbContext() with UseSqlServer in Startup.ConfigureService()        |
| ac-svc-adddbcontext-inmemory | AddDbContext() with UseInMemoryDatabase in Startup.ConfigureService() |
| ac-svc-addmvc                | AddMvc() with AddJsonOptions() in Startup.ConfigureService() |
| ac-svc-addspastaticfiles     | AddSpaStaticFiles()() in Startup.ConfigureService()          |
| ac-svc-addsingleton          | AddSingleton() in Startup.ConfigureService()                 |
| ac-use-spa                   | UseSpa() in Startup.Configure()                              |
| ac-api-controller            | Create an API Controller class                               |
| ac-api-action                | Create an API Action: GET                                    |
| ac-api-action-post           | Create an API Action: POST                                   |
| ac-api-action-put            | Create an API Action: PUT                                    |
| ac-api-action-delete         | Create an API Action: DELETE                                 |
| ac-mvc-action                | Create a MVC Action                                          |
| ac-mvc-action-async          | Create a MVC Async Action                                    |

### Razor

| Prefix                          | Description                                                  |
| ------------------------------- | ------------------------------------------------------------ |
| ac-inject                       | Generate an @inject block                                    |
| ac-environment                  | Generate an `<environment include="">` block (Include surrounding snippet) |
| ac-environment-exclude          | Generate an `<environment exclude="">` block (Include surrounding snippet) |
|@Html.ActionLink                 |      |
|@Url.Action                      |      |
|@Html.Action                     |      |
|@Html.Partial                    |      |
|@Html.BeginForm                  |      |
|@Html.BeginForm-enctype          |      |
|@Html.AntiForgeryToken           |      |
|@Html.Id                         |      |
|@Html.Name                       |      |
|@Html.Value                      |      |
|@Html.ValidationSummary          |      |
|@Html.DropDownList               |      |
|@Html.ListBox                    |      |
|@Html.CheckBox                   |      |
|@Html.Label                      |      |
|@Html.TextBox                    |      |
|@Html.TextArea                   |      |
|@Html.Password                   |      |
|@Html.RadioButton                |      |
|@Html.Hidden                     |      |
|@Html.IdFor                      |      |
|@Html.NameFor                    |      |
|@Html.ValueFor                   |      |
|@Html.ValidationSummaryFor       |      |
|@Html.DropDownListFor            |      |
|@Html.ListBoxFor                 |      |
|@Html.CheckBoxFor                |      |
|@Html.LabelFor                   |      |
|@Html.TextBoxFor                 |      |
|@Html.TextAreaFor                |      |
|@Html.PasswordFor                |      |
|@Html.RadioButtonFor             |      |
|@Html.HiddenFor                  |      |
|@Html.DisplayName                |      |
|@Html.Display                    |      |
|@Html.Editor                     |      |
|@Html.DisplayNameFor             |      |
|@Html.DisplayFor                 |      |
|@Html.EditorFor                  |      |
|@Html.DisplayForModel            |      |
|@Html.EditorForModel             |      |
|@if                              |      |
|@foreach                         |      |
|@for                             |      |
|@ViewBag                         |      |
|@ViewData                        |      |
|@TempData                        |      |
|@model                           |      |
|@RenderSection                   |      |
|@section                         |      |

### JSON (`appsettings.json`)

| Prefix               | Description                        |
| -------------------- | ---------------------------------- |
| ac-appsettings       | Create appsettings.json template   |
| ac-logging           | Create advanced Logging settings   |

## Entity Framework Core Snippets

### C\#

| Prefix               | Description                    |
| -------------------- | -------------------------------|
| ef-dbcontext         | Create an API Controller class |

### JSON

| Prefix               | Description                                                         |
| -------------------- | ------------------------------------------------------------------- |
| ac-connstr           | Create `ConnectionStrings` section                                  |
| ac-connstr-trusted   | Create `ConnectionStrings` section with Trusted_Connection template |
| ac-connstr-ip        | Create `ConnectionStrings` section with IP_Connection template      |
| connstr-trusted      | Create a `ConnectionStrings` item with Trusted_Connection template  |
| connstr-ip           | Create a `ConnectionStrings` item with IP_Connection template       |

## Contributing

If you need any ASP.NET Core / Entity Framework Core snippets, please feel free to send PRs to me or simply [drop me a note](https://github.com/doggy8088/netcore-snippets/issues)! 😊

**Enjoy!**
