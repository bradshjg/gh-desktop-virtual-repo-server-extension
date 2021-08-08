# github-desktop-virtual-server

VS Code extension to launch a server capable of handling client requests for [virtual repo fork of GitHub Desktop](https://github.com/bradshjg/desktop/) in a remote VS Code environment (e.g. Codespaces).

The idea is that instead of requiring the user to install the dependencies (Node/Express/FS-Extra) and run it standalone, VS
Code can run it via the extension host (since it already has the Node runtime laying around for us :smile:).

## Installation

Visit the "Releases" page in GitHub and download the latest ".vsix" extension.

In VS Code, use the command pallete (e.g. `Cmd+Shift+P`) to run "Extensions: Install from VSIX..." and install the
extension.

You'll need to visit the extensions tab in VS Code to "Install in Codespaces".

Once installed, use the command pallete to run "GitHub Desktop: Start virtual repo server".

Now you can add a virtual repo in GitHub Desktop.

Sigh...this should be easier.

## Requirements

A relatively recent version of git is required, it should track upstream GitHub Desktop's requirements, which is currently

`git --version` > v2.29

## Known Issues

TODO let's keep this one as a placeholder :smile:

## Release Notes

### 0.0.1

Initial release of ...

TODO gotta release _something_ at some point :smile: