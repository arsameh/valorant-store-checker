# Valorant Store Checker
A lightweight app to check daily valorant store changes through your phone!

## TODO:
- [x] Develop initial WebView login
- [x] Handle token extraction
- [x] Get player info (`puuid`, region)
- [x] Fetch & parse raw storefront JSON from Riot API
- [x] Map skin UUIDs to `valorant-api.com` assets (names, HD images, VP prices)
- [x] Build main UI: login, logout buttons, display skin info
- [x] Implement session ID cookie storage for background re-authentication -> WEBVIEW AUTOMATICALLY HANDLES SESSIONS IT SEEMS, CANCELLED FOR NOW

## ADVANCED FEATURES:
- [ ] Build browse screen to add/remove items from wishlist
- [ ] Set up background process to check store daily at reset
- [ ] Match daily store skins against user wishlist
- [ ] Trigger notification when a wishlisted item hits the store

## OPTIONAL:
- [ ] Polish UI (dark mode, error handling, pull-to-refresh)
- [ ] Fetch & parse Accessories store JSON (Kingdom Credits, Gun Buddies, Cards, Sprays)
- [ ] Build UI for Accessories store tab
