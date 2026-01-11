const fs = require('fs');
try {
    console.log("Loading app...");
    require('./src/app');
    console.log("Loaded.");
} catch (e) {
    fs.writeFileSync('debug_error.txt', e.stack);
    console.log("Error written to debug_error.txt");
}
