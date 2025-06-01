
<img src="https://raw.githubusercontent.com/RAMRaiders/batocode-arcade/main/pkgbuild/images/batocode-arcade-thumb.png" alt="BatoCode-Arcade Thumbnail" width="250"/>

BatoCode-Arcade is a streamlined Linux desktop client purpose-built to transform your [MakeCode Arcade](https://arcade.makecode.com/) games into a seamless kiosk-style experience. It launches your exported games in fullscreen, sandbox-free Electron environments — perfect for arcades, exhibits, classrooms, and embedded devices like Raspberry Pi. Whether you’re showcasing a single game or building a curated collection, BatoCode-Arcade offers a focused, distraction-free launcher optimized for gamepad or minimal input navigation. Run it in your [Batocera Linux](https://batocera.org/) and bring your creations to life on real arcade hardware.


## Features
- Fullscreen kiosk mode browser window
- Runs MakeCode Arcade games from the official kiosk URL  
- Cross-platform support (built primarily for Linux/Batocera)  

## The Story Behind It
A long time ago, in a galaxy not so far away… I decided to build a small arcade cabinet for my son. The idea was to let him experience the magic of retro gaming and learn how video games have evolved over time. What started as a simple project had a surprisingly big impact on him — it sparked a deep curiosity. Before long, he was researching vintage consoles, classic home computers, and legendary games from past decades.

I was honestly amazed when I heard him chatting with his school friends about the Odyssey 2 and the original Game Boy. His interest kept growing, and eventually, it shifted toward understanding how games are made. That’s when he discovered Microsoft MakeCode Arcade, a platform that lets beginners create games using drag-and-drop code blocks.

He started building his own games and testing them in the small preview window built into the editor. One day, he asked me: “Can we run my games on the arcade cabinet?” That simple question kicked off the next chapter of our project. After some digging, I realized MakeCode Arcade exports were only supported on Windows — not ideal, since our cabinet runs on Linux.

So, I rolled up my sleeves and built a custom wrapper app that would let his MakeCode Arcade games run smoothly on our Linux arcade setup. And that’s how BatoCode-Arcade was born — turning curiosity into creation, and code into something truly playable.

## Releases
![GitHub release](https://img.shields.io/github/v/release/RAMRaiders/batocode-arcade) ![GitHub release date](https://img.shields.io/github/release-date/RAMRaiders/batocode-arcade)


You can find all the releases in [here](https://github.com/RAMRaiders/batocode-arcade/releases). Case you prefer you can also build it yourself, check the [wiki](https://github.com/RAMRaiders/batocode-arcade/wiki#building).

## Requirements

To use **BatoCode-Arcade**, make sure your setup meets the following prerequisites:

- **Batocera Linux OS**  
  This project is designed and optimized specifically for [Batocera Linux](https://batocera.org/), a retro gaming-focused distribution. While it may run on other Linux systems, official support and packaging target Batocera only.

- **Internet Access**  
  A stable internet connection is required to launch and play MakeCode Arcade games via the official kiosk URLs.

- **Supported Hardware Architectures**  
  BatoCode-Arcade is currently available for the following platforms:
  - `x86_64` — Standard PCs, mini PCs, and most arcade hardware
  - `aarch64` — ARM-based boards like the Raspberry Pi 4 and other SBCs


## Installing on Batocera

To install BatoCode-Arcade quickly and easily, open your Batocera terminal — either locally or via SSH — and run the following command:

```bash
arch=$(uname -m); grep -q "\[batocode-arcade\]" /userdata/system/pacman/pacman.conf || echo -e "\n[batocode-arcade]\nSigLevel = Optional TrustAll\nServer = https://ramraiders.github.io/batocode-arcade/$arch" >> /userdata/system/pacman/pacman.conf && pacman -Sy && pacman -S --noconfirm ports-batocode-arcade
```

This command will:

-	Add the custom Pacman repository to your Batocera configuration (if it hasn’t already been added).
-	Refresh the local package database to ensure it’s up to date.
-	Automatically install BatoCode-Arcade using Pacman without requiring further confirmation.

Once installed, navigate to the Ports section in your Batocera menu — you should see BatoCode-Arcade listed and ready to launch.

For advanced installation methods or troubleshooting, visit the [wiki](https://github.com/RAMRaiders/batocode-arcade/wiki#installing-in-batocera-linux-os).


## Disclaimer
BatoCode-Arcade is an independent, community-driven project and is not affiliated with, endorsed by, or maintained by Microsoft MakeCode or Batocera.linux. It is provided as-is, without any warranties or guarantees of functionality, performance, or compatibility across all systems.

Use of this software is at your own risk. Ensure you comply with the licenses of any games or assets you run through BatoCode-Arcade. The developers are not responsible for any data loss, system errors, or unintended consequences resulting from its usage.
