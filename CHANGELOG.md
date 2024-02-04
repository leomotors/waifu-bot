# Changelog

Previous changelog before 4.0.605 may not be noted here.

## [6.0.900] - 2023-02-04

- chore: bump deps
- refactor: no longer require api key for golden frame (See new Golden Frame Web)
- fix: bad activity set payload (causing empty activities)

## [6.0.889] - 2023-12-28

- chore: bump deps
- feat: docker image for arm64

## [6.0.888.1] - 2023-11-19

- fix: sharp bug

## [6.0.888] - 2023-11-18

- feat: new sveltekit website for admin management (and soon for user to use)
- feat: dynamic presence activity (no more static json)
- feat: dynamic waifu, can now change one without needing to release new version
- more: idk see changelog

## [5.2.821] - 2023-10-25

- fix: play-dl wrong version

## [5.2.820] - 2023-10-17

- chore: bump deps like usual
- feat: simp kanade

## [5.1.810] - 2023-09-23

- fix: wrong lib name in /status
- chore: bump @cocoa-discord/music-module to 1.1
- feat: change encoding library, added ffmpeg-static to fix /speak

## [5.0.800] - 2023-09-22

- refactor(bot): remove /lyrics (kashi module), /quality, /kitakita, /speak(TTS Module)
- feat: updated cocoa-discord to v3
- feat: use @cocoa-discord/music-module with new TTS cog

## [4.1.710] - 2023-09-10

- feat(goldenframe): get server avatar for goldenframe

## [4.1.700] - 2023-09-10

- feat: kaede
- refactor: Remove website and server (will write again later, maybe)
- refactor: native esm
- refactor: remove namespace
- feat: use zod for environment instead
- feat: new better docker build
- feat: public docker image at ghcr.io
- feat: /goldenframe now use goldenframe API
  (No need to bundle thicc python and dangerous `exec` usage)
- feat: /goldenframe now supports animated profile picture (forceStatic)

## [4.0.662] - 2023-04-22

- chore: update docker build step

## [4.0.661] - 2023-04-17

- chore: pnpm 8
- refactor: ???

## [4.0.660] - 2023-03-19

- chore: bump dependencies
- feat(server): migrate to mercurius and fastify
- refactor(codegen): rename package graphql to codegen
- fix(bot): bump discordjs/voice to 0.15 to fix connection issues

## [4.0.650] - 2022-12-16

- refactor: thicc refactor eslint prettier config
- [breaking] refactor: node 18
- feat: New Cog "Shitpost"
- feat: New Command cunny
- fix: kitakita wtf unicode
- refactor: use rollup to bundle @waifu-bot/bot
- chore: tweak turborepo pipeline

## [4.0.645] - 2022-12-12

- feat: pfp command now outputs png
- chore: bump deps (will fix some bugs)

## [4.0.643] - 2022-11-29

- build: remove lint from start's dependency
- feat: update kitakita.json

## [4.0.642] - 2022-11-29

- chore: bump deps
- refactor: removed emoji, renamed blep -> pfp
- feat: /kitakita

## [4.0.640] - 2022-11-16

- chore: bump deps
- feat: bocchi

## [4.0.629] - 2022-09-18

- Bump Deps, welcome Global Command!

## [4.0.620] - 2022-09-04

- Moved to `play-dl`
- [breaking] Breaking schema, required database reset

## [4.0.606] - 2022-08-22

- Update Forbidden Page

## [4.0.605] - 2022-08-15

- Fix inconsistent of .env.(template|example)
- Add comment to some .env.example
- Update \_document.tsx for better font
- MOTIVATION
