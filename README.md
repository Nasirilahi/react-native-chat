# react-native-chat

This is a react-native android chat app.Anyone person can be part of this chat as it is a public chat app. Same code will also work on iOS platform, but this is developed for keeping android platform in mind.This application is developed on react-native + redux architecture

## Getting Started

### React-native environment set

 follow official website of react-native for setting up react-native environment in to your machine.

https://facebook.github.io/react-native/docs/getting-started.html 


* Make sure `nodejs` is installed
* React Native CLI is needed, do `npm install -g react-native-cli`
* clone the repo `git clone https://github.com/Nasirilahi/react-native-chat.git`
* move into the project directory `cd react-native-chat`
* Run `npm install` to install the dependencies


 After installing dependencies run your server by running command :- 
  
```
$ npm run server
```

After running your server now create build for android.Connect your android device to machine 


## IMPORTANT 

Now Your server has started and also build for android will be created in to device or emulator but both will not be able

to communicate. So to make communicaction between these clients and server we need to make little change in a file. Please 

do the following to make change :- 

 Go to project directory/src/socket folder. In this folder you will find a socket.js file, in this file make below change :-
 
 ```
 var socket = io("http://10.1.21.213:3000",{
    jsonp:false
});
```

You need to change this ip address from you machine ip address.

Everthing is fine. Now create build for android :- 

First run either two instances of Simulator or only one but connect your device with the system so that you can make build on two devices.

Open your new tab into terminal and go to project directory, now in your terminal type the following command. 

```
$ react-native run-android
```
## start public chating 
