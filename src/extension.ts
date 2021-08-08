// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import { app } from './server';


export function activate() {

	const PORT = 9195;

	console.log(`github-desktop-virtual-server is now active! Binding to and forwarding ${PORT}!`);

	app.listen(PORT);
	vscode.env.asExternalUri(vscode.Uri.parse(`http://localhost:${PORT}`));
}

// TODO I _think_ VS code can handle cleanup, but we'll see
export function deactivate() {}
