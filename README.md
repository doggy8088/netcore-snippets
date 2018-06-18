# Essential ASP.NET Core Snippets

This extension is optimized for developers who wants to develop ASP.NET Core 2 and Entity Framework Core 2.  These code snippets contains **C#** and **JSON** snippets.  So you can even write your own `appsettings.json` using my code snippets in a rocket speed.

## Features

A set of pre-defined code snippets can boost your ASP.NET Core development productivity.

## Snippet Prefixes

| Prefix  | Description                    |
| ------- | -------------------------------|
| ac-     | ASP.NET Core Snippets          |
| ef-     | Entity Framework Core Snippets |

## ASP.NET Core Snippets

### MSBuild (.csproj)

| Prefix               | Description                                  |
| -------------------- | -------------------------------------------- |
| ac-csproj            | Create Default ASP.NET Core 2 MSBuild file   |

### C\#

| Prefix                   | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| ac-program-cs            | Basic `Program` class                                        |
| ac-program-main          | `Main()` method in `Program`                                 |
| ac-program-main-full     | `Main()` method in `Program` with Full sample                |
| ac-startup               | Basic `Startup` class                                        |
| ac-app-use               | app.Use()                                                    |
| ac-app-run               | app.Run()                                                    |
| ac-app-map               | app.Map()                                                    |
| ac-svc-adddbcontext      | AddDbContext() in Startup.ConfigureService()                 |
| ac-svc-addmvc            | AddMvc() with AddJsonOptions() in Startup.ConfigureService() |
| ac-svc-addspastaticfiles | AddSpaStaticFiles()() in Startup.ConfigureService()          |
| ac-svc-addsingleton      | AddSingleton() in Startup.ConfigureService()                 |
| ac-use-spa               | UseSpa() in Startup.Configure()                              |
| ac-api-controller        | Create an API Controller class                               |
| ac-api-action            | Create an API Action: GET                                    |
| ac-api-action-post       | Create an API Action: POST                                   |
| ac-api-action-put        | Create an API Action: PUT                                    |
| ac-api-action-delete     | Create an API Action: DELETE                                 |
| ac-mvc-action            | Create an MVC Action                                         |
| ac-mvc-action-async      | Create an MVC Async Action                                   |

### JSON

| Prefix               | Description                        |
| -------------------- | ---------------------------------- |
| ac-appsettings       | Create appsettings.json template   |
| ac-logging           | Create advanced Logging settings   |

## Entity Framework Core Snippets

### C#

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
