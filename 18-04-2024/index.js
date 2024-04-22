import EventEmitter from "events";

var eventEmitter = new EventEmitter();

var func1 = (msg) => {
    console.log("Message from 1 : " + msg);
};

var func2 = (msg) => {
    console.log("Message from 2 : " + msg);
};

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent", func2);

eventEmitter.emit("myEvent", "hello");
