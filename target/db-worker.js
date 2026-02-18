import * as i6 from "@sqlite.org/sqlite-wasm";
import * as i5 from "comlink";
import * as i0 from "path";
import * as i1 from "mldoc";
import * as i2 from "sanitize-filename";
import * as i4 from "fuse.js";
import * as i3 from "remove-accents";

const ALL = {};

globalThis.shadow$bridge = function(name) {
  const ret = ALL[name];
  if (ret == undefined) {
    throw new Error("Dependency: " + name + " not provided by external JS!");
  } else {
    return ret;
  }
};

ALL["@sqlite.org/sqlite-wasm"] = {
  default: i6.default
};

ALL["comlink"] = {
  expose: i5.expose,
  wrap: i5.wrap,
  transfer: i5.transfer
};

ALL["path"] = {
  extname: i0.extname,
  basename: i0.basename,
  dirname: i0.dirname,
  join: i0.join,
  parse: i0.parse,
  isAbsolute: i0.isAbsolute
};

ALL["mldoc"] = {
  Mldoc: i1.Mldoc
};

ALL["sanitize-filename"] = i2;

ALL["fuse.js"] = i4;

ALL["remove-accents"] = i3;
