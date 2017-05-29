const util = require('util');
const events = require('events');
const LONG_TIME = 2000;

function Cmd() {
    events.EventEmitter.call(this);
}
util.inherits(Cmd, events.EventEmitter);

Cmd.prototype.command = function () {
    setTimeout(() => this.emit('complete'), LONG_TIME);
    return this;
};

module.exports = Cmd;