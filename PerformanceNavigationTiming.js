
(function () {
    var timings = [];
    var navigationTimings = performance.getEntriesByType("navigation");

    for (var i = 0; i < navigationTimings.length; i++) {
        timings.push({
            label: 'Duration',
            value: navigationTimings[i].duration
        });
        timings.push({
            label: 'DOM interactive',
            value: navigationTimings[i].domInteractive
        });
        timings.push({
            label: 'DOM complete',
            value: navigationTimings[i].domComplete
        });
        timings.push({
            label: 'DNS Lookup',
            value: navigationTimings[i].domainLookupEnd - navigationTimings[i].domainLookupStart
        });
        timings.push({
            label: 'Load event',
            value: navigationTimings[i].loadEventEnd - navigationTimings[i].loadEventStart
        });
        timings.push({
            label: 'Unload event',
            value: navigationTimings[i].unloadEventEnd - navigationTimings[i].unloadEventStart
        });  
        timings.push({
            label: 'Redirections',
            value: navigationTimings[i].redirectCount
        });
        timings.push({
            label: 'Transfer size (octets)',
            value: navigationTimings[i].transferSize
        });

        console.group("Endpoint " + navigationTimings[i].name);
        console.table(timings);
        console.groupEnd();

        timings = [];
    }   

})();