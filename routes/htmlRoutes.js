// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
const path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

  app.get("/api", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  app.get("/api/exercise", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });

  app.get("/api/stats", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });

};