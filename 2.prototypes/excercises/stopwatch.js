// This is just for training.
// It has a problem with exposing private properties
// private props can be overwritten from outside
// eg.: sw.duration = 100;
// It would be better to not put methods on prototype in this case

const Stopwatch = function() {
    let startTime = null;
    let duration = 0;

    Object.defineProperties(this, {
        duration: {
            get: function() {
                return duration;
            },
            set: function(value) {
                duration = value;
            },
            enumerable: false,
            configurable: false
        }
    });

    Object.defineProperties(this, {
        startTime: {
            get: function() {
                return startTime;
            },
            set: function(value) {
                startTime = value;
            },
            enumerable: false,
            configurable: false
        }
    });
};

Stopwatch.prototype.start = function() {
    if (this.startTime) {
        throw new Error("Stopwatch is already running.");
    }

    this.startTime = Date.now();
    console.log("stopwatch started");
};

Stopwatch.prototype.stop = function() {
    if (!this.startTime) {
        throw new Error("Stopwatch is already stopped.");
    }

    this.duration += (Date.now() - this.startTime) / 1000;
    this.startTime = null;
    console.log("stopwatch stopped at: ", this.duration);
};

Stopwatch.prototype.reset = function() {
    this.startTime = null;
    this.duration = 0;
};
