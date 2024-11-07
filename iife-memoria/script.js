if (typeof global.performance === "undefined") {
    const { performance } = require("perf_hooks");
    global.performance = performance;
}

console.log("Uso de memoria inicial:", process.memoryUsage().heapUsed);

function sinIIFE() {
    var datos = new Array(1000000).fill("sin IIFE");  
    console.log("Dentro de sinIIFE:", process.memoryUsage().heapUsed);
}
sinIIFE();

console.log("Después de sinIIFE:", process.memoryUsage().heapUsed);

(function() {
    var datos = new Array(1000000).fill("con IIFE");  
    console.log("Dentro del IIFE:", process.memoryUsage().heapUsed);
})(); 

console.log("Después del IIFE:", process.memoryUsage().heapUsed);
