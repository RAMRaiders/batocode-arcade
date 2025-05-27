# MakOcera

<img src="https://raw.githubusercontent.com/RAMRaiders/makocera/main/assets/icon.png" alt="MakOcera Logo" width="150"/>

---

A simple wrapper that can run MakeCode Arcade games in Kiosk mode on Batocera.

![GitHub release](https://img.shields.io/github/v/release/RAMRaiders/makocera) ![GitHub release date](https://img.shields.io/github/release-date/RAMRaiders/makocera)

## Downloads
Get the latest release from the [GitHub releases page](https://github.com/RAMRaiders/makocera/releases).

[![Download x64](https://img.shields.io/github/downloads/RAMRaiders/makocera/latest/batocera-linux-x64.tar.gz?label=Download%20x64)](https://github.com/RAMRaiders/makocera/releases/latest/download/batocera-linux-x64.tar.gz)

[![Download arm64](https://img.shields.io/github/downloads/RAMRaiders/makocera/latest/batocera-linux-arm64.tar.gz?label=Download%20arm64)](https://github.com/RAMRaiders/makocera/releases/latest/download/batocera-linux-arm64.tar.gz)


---

## Overview

MakOcera is an Electron-based application designed to launch MakeCode Arcade games in fullscreen kiosk mode, optimized for running on Batocera gaming systems. It loads the MakeCode Arcade web kiosk directly, providing a streamlined, distraction-free gaming experience.

---

## Features

- Fullscreen kiosk mode browser window
- Runs MakeCode Arcade games from the official kiosk URL  
- Cross-platform support (built primarily for Linux/Batocera)  
- Easy packaging with Electron and Electron Builder
- Supports packaging as AppImage and tar.gz for Linux deployments

---

## Running on Batocera

Download the build for your architecture and drop the contents under /userdata/roms/ports. Update your gamelist and select the Makocera app.

---

## Installation

### From source

1. Clone this repository:
  ```bash
    git clone git@github.com:RAMRaiders/makocera.git
    cd makocera
  ```

2. Install dependencies:
  Install project dependencies with:
  ```bash
    npm ci
  ```
  This command installs all necessary packages exactly as specified in the lockfile, ideal for reproducible builds.

---

## Running Locally
  To run the application locally (requires Electron):
  ```bash
    npm start
  ```

  This will launch the Electron app opening the Makecode Arcade kiosk URL in fullscreen kiosk mode.

--

## Building for Linux
  To create distributable packages for Linux (AppImage and tar.gz), run:

  ```bash
    npm run dist
  ```

This will produce the build files in the `dist` directory.

### Building with GitHub Actions

This project includes a GitHub Actions workflow that automatically:

- Builds Linux releases on Ubuntu runners when pushing a tag starting with `v` (e.g., v1.0.0)  
- Packages the app as AppImage and tar.gz  
- Creates a GitHub release  
- Uploads the built artifacts and a helper launch script (`run-makocera.sh`) to the release assets  

To trigger the build and release workflow, simply push a new git tag matching `v*`.


## License

MIT License
