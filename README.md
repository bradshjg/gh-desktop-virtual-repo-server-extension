# github-desktop-virtual-server

VS Code extension to launch a server capable of handling client requests for [virtual repo fork of GitHub Desktop](https://github.com/bradshjg/desktop/) in a remote VS Code environment (e.g. Codespaces).

The idea is that instead of requiring the user to install the dependencies (Node/Express/FS-Extra) and run it standalone, VS
Code can run it via the extension host (since it already has the Node runtime laying around for us :smile:).

## Features

No user-facing features, yet! And maybe not ever!

## Requirements

A relatively recent version of git is required, it should track upstream GitHub Desktop's requirements, which is currently

`git --version` > v2.29

## Known Issues

TODO let's keep this one as a placeholder :smile:

## Release Notes

### 0.0.1

Initial release of ...

TODO gotta release _something_ at some point :smile: