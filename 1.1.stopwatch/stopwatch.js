const Stopwatch = function() {
    let startTime = null;
    let duration = 0;

    this.start = function() {
        if (startTime) {
            throw new Error("Stopwatch is already running.");
        }

        startTime = Date.now();
        console.log("stopwatch started");
    };

    this.stop = function() {
        if (!startTime) {
            throw new Error("Stopwatch is already stopped.");
        }

        duration += (Date.now() - startTime) / 1000;
        startTime = null;
        console.log("stopwatch stopped at: ", duration);
    };

    this.reset = function() {
        startTime = null;
        duration = 0;
    };

    // this.duration = function() {
    //     console.log("duration: ", duration);
    // };

    Object.defineProperties(this, {
        duration: {
            get: function() {
                return duration;
            }
        }
    });
};
