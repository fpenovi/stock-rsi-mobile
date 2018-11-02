# stock-rsi-mobile · [![node version: 8.12.0](https://img.shields.io/badge/node-8.12.0-brightgreen.svg)](https://nodejs.org/en/blog/release/v8.12.0/ "Changelog") · [![npm version: 6.4.1](https://img.shields.io/badge/npm-6.4.1-blue.svg)](https://github.com/npm/cli/releases/tag/v6.4.1 "Changelog") · [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier "GitHub")
RSI Indicators mobile app for major US blue-chip companies

+ [Running for the first time](#running-for-the-first-time)
+ [Versioning](#versioning)
+ [Generating release](#generating-release)
+ [Troubleshooting](#troubleshooting)

## Running for the first time
1. Clone repository  

2. Install NPM dependencies  
    cd into Root Project folder and run `npm i`  
    
3. Generate native folders  
    Run `react-native eject`  
    
4. Link Libraries  
    Run `react-native link`  
    
5. Run on emulator  
    Run `react-native run-android` or `react-native run-ios`  
    *By default, running on emulator uses the development enviroment variables.*
    
## Versioning
Work in Progress ...


## Generating release
Work in Progress ...


## Troubleshooting

#### iNotify Linux Watches

if `$ npm start` prints an error in Linux involving **inotify** *max_user_watches* you should   
be able to fix it by running the following command on a shell:  

```sh
$ echo 'fs.inotify.max_queued_events=163840
fs.inotify.max_user_instances=1280
fs.inotify.max_user_watches=81920' | sudo tee /etc/sysctl.d/91-override.conf
```

Then reboot your PC and run the following to check it was successful:
```sh
$ sysctl -a | grep fs.inotify.max_
```

You should see that the values are indeed the ones set in the prior step.