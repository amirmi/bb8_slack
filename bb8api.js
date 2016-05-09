"use strict";

var sphero = require('sphero');
var bb8 = sphero(process.env.SPHERO_KEY);
var Promise = require('bluebird');
var async = Promise.coroutine;

function connect() {
    return bb8.connect().then(() => {
        console.log("Now connected to BB-8");

        //The Ping command verifies that BB8 is awake and receiving commands.
        bb8.ping(function (err, data) {
            console.log(err || data);
        });
    });
}

var calibrate = async(function* () {
    console.log("::START CALIBRATION::");
    bb8.startCalibration();

    yield Promise.delay(5000)
    console.log("::FINISH CALIBRATION::");
    bb8.finishCalibration();
})

function moveHead (angle) {
    angle = angle != undefined ? angle : Math.floor(Math.random() * 270) + 90
    bb8.roll(0, angle);
    console.log("rolling", angle)
}

function sleep(angle) {
    angle = angle != undefined ? angle : Math.floor(Math.random() * 270) + 90
    bb8.roll(-10, angle);
    console.log("rolling", angle)
}

var lookAround = async(function* () {
    moveHead(0)
    yield Promise.delay(500);
    moveHead(90)
    yield Promise.delay(500);
    moveHead(270)
    yield Promise.delay(500);
    moveHead(0)
});

var disco = async(function *() {
    let counter = 0;
    while(counter < 10) {
      bb8.randomColor()
      counter++;
      yield Promise.delay(500)
    }
});

exports.connect = connect;
exports.moveHead = moveHead;
exports.lookAround = lookAround;
exports.disco = disco;
exports.calibrate = calibrate;
exports.sleep = sleep;
exports.color = bb8.color;

