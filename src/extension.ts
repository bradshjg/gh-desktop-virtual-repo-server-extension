import * as vscode from 'vscode';
import * as http from 'http';

import { app } from './server';

let server: (null | http.Server) = null;
const PORT = 9195;

export function activate(context: vscode.ExtensionContext) {
	let startDisposable = vscode.commands.registerCommand('github-desktop-virtual-server.startServer', async () => {
		if (server instanceof http.Server) {
			return
		}
		server = app.listen(PORT);
		vscode.env.asExternalUri(vscode.Uri.parse(`http://localhost:${PORT}`));
		context.subscriptions.push(startDisposable);
	});

	let stopDisposable = vscode.commands.registerCommand('github-desktop-virtual-server.stopServer', async () => {
		if (server instanceof http.Server) {
			server.close();
		}
		vscode.window.showInformationMessage(`Deactivate port ${PORT} in the "Ports" tab to complete cleanup.`);
		context.subscriptions.push(stopDisposable);
	});	
}

export function deactivate() {
	if (server instanceof http.Server) {
		server.close();
	}
}
