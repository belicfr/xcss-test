const XCSS = require("xcss-lang");

let instance = new XCSS.interpreter("src/css/index.xcss");
instance.interpret();