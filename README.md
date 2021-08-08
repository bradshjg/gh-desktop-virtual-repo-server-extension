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

* Requires manual cleanup of the port forwarding when "GitHub Desktop: Stop virutal repo server" is called. This
  is due to the lack of an API for managing forwarded ports (hopefully this will change in the future). This is
  also only relevant when a user has multiple Codespaces projects open simultaneously and wnat to control which repo
  is available in GitHub Desktop (which currently lacks support for multiple virtual repo servers).

## Release Notes

### 0.0.1

Initial release
