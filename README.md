# ESP32 production time measure device 
this project has been made to connect Esp32 device to a web server transmitting information to be saved in databses and make a do tracking of productio performance.

## Table of contents
* Esp Wifi Connection
* ESP Http connection 
* Express for receive data from http clients

## Installation
Use the package manager npm to install Express.Js.
```bash
npm install express
```
## API Reference

#### Get all items

<!-- ```http -->
<!-- GET /api/items -->
```bash

 GET /?id=Id&tiempo=Tiempo
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Id` | `string` | **Required**. device Id |
| `Tiempo` | `string` | **Required**. time measured |

Use the package manager [Arduino Json](https://arduinojson.org/) to build Json packages.

## Authors

:bust_in_silhouette: [Daniel Salazar](https://www.github.com/danielsalazr)

## Support

For support, email danielsalazr@hotmail.com or join our linkedin channel.

## This project is supported by the following technologies.

![Arduino](https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white)
![C++](https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white)
<img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express">&nbsp;&nbsp;
![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)


:octocat:
