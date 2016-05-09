# BB8 + slack
a quick example of how to connect your personal BB-8 (or Sphero gadget) to Slack API, using a NodeJS Express server.

Built on top of sphero.js (https://github.com/orbotix/sphero.js) and node-slack-client (https://github.com/slackhq/node-slack-client)

Usage:
-----

Every time someones mentions you on slack, bb8 will change colors (disco), and will move it's head.
if the word "urgent" is mentioned along your name, bb8 will turn red :)

In addition you call can call *http://locahost:3000/move* (moves head) and *http://locahost:3000/disco* (changes colors) directly :)


Installing:
-----------

1) clone this repo.
2) npm install.
3) Please set the following environment variables before running npm start:

**SPHERO_KEY**

run the following command 

> node ./node_modules/noble/examples/advertisement-discovery.js

e.g. 

> peripheral discovered (a1e9d4fed6df41ce81aa9816f8058077 with address <d7:5e:27:ef:12:c6, unknown>, connectable true, RSSI -45:
	hello my local name is:
		BB-12C6
	can I interest you in any of the following advertised services:
		[]
	here is my manufacturer data:
		"3330"
	my TX power level is:
		6

your key will be: a1e9d4fed6df41ce81aa9816f8058077
		
(for more information: https://github.com/orbotix/sphero.js#connecting-to-bb-8ollie) 

**SLACK_TOKEN** 
(https://api.slack.com/tokens)

**SLACK_USER**  

you can see it in the logs, first time after you run npm start




