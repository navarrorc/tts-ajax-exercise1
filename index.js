// Create a Browsersync instance
var bs = require("browser-sync").create();

// Listen to change events on all files and reload
bs.watch("docs/*").on("change", bs.reload);

// Now init the Browsersync server
bs.init({
    server: "./docs"
});
