import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

function readAllText(filename: string) {
    const fullpath = path.join(__dirname, 'snippets', filename);
    return JSON.parse(fs.readFileSync(fullpath).toString('UTF-8'));
}

const registerCompletionItemProvider = (obj: any, selector: vscode.DocumentSelector) => {

    const provider: vscode.CompletionItemProvider = {

        provideCompletionItems: (_document: vscode.TextDocument,
                                 _position: vscode.Position,
                                 _token: vscode.CancellationToken,
                                 _context: vscode.CompletionContext) => {

            const completionItems: vscode.CompletionItem[] = [];

            Object.keys(obj).forEach((title) => {
                const snippet = obj[title];
                const body = Array.isArray(snippet.body) ? snippet.body.join('\n') : snippet.body;
                const completion = new vscode.CompletionItem(snippet.prefix);
                completion.insertText = new vscode.SnippetString(body);
                completion.documentation = new vscode.MarkdownString(snippet.description);
                completionItems.push(completion);
            });

            return completionItems;
        },
    };

    return vscode.languages.registerCompletionItemProvider(selector, provider);
};

export function activate(context: vscode.ExtensionContext) {

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-controllers.json'), {
        language: 'csharp',
        pattern: '**/*Controller.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-hubs.json'), {
        language: 'csharp',
        pattern: '**/*Hub.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext.json'), {
        language: 'csharp',
        pattern: '**/*Context.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext-factory.json'), {
        language: 'csharp',
        pattern: '**/*ContextFactory.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-dbcontext.json'), {
        language: 'csharp',
        pattern: '**/*Entities.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-middleware.json'), {
        language: 'csharp',
        pattern: '**/*Middleware.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-program.json'), {
        language: 'csharp',
        pattern: '**/Program.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('csharp-startup.json'), {
        language: 'csharp',
        pattern: '**/Startup*.cs',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('json-appsettings.json'), {
        language: 'json',
        pattern: '**/appsettings*.json',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('msbuild-csproj.json'), {
        language: 'msbuild',
        pattern: '**/*.csproj',
        scheme: 'file',
    }));

    context.subscriptions.push(registerCompletionItemProvider(readAllText('razor-cshtml.json'), {
        language: 'razor',
        pattern: '**/*.cshtml',
        scheme: 'file',
    }));
}
