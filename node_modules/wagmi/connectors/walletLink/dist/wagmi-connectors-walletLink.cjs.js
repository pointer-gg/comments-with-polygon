'use strict';

if (process.env.NODE_ENV === "production") {
  module.exports = require("./wagmi-connectors-walletLink.cjs.prod.js");
} else {
  module.exports = require("./wagmi-connectors-walletLink.cjs.dev.js");
}
