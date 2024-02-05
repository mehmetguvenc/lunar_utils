export const waitForFinalEvent = (function () {
    var timers: any = {};
    return function (callback: Function, ms: number, uniqueId: string) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();