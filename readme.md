# ADB Relay
Provides a http-endpoint to send ADB (Android Debug Bridge) commands to Android devices without the need to install adb on your system.

## Routes
### /connect/:ip [POST]
Send this request to connect to IP-ADB-device.  
The command being executed is `adb connect {IP}`

### /command [POST]
Send a `POST` request to the program with an `application/json` body as follows
```JSON
{
    "device": "<ip> or <devide_id>",
    "command": "shell input ..."
}
```
The command being executed is `adb -s {device} {command}`


## Usage
I suggest you use the docker image:
`thesutt/adbrelay:latest`

Or check it out on [hub.docker.com](https://hub.docker.com/repository/docker/thesutt/adbrelay)


You can of course start it as a stand-alone application using `npm start`.