import * as i3 from "comlink";
import * as i2 from "@huggingface/transformers";
import * as i1 from "hnswlib-wasm";
import * as i0 from "path";

const ALL = {};

globalThis.shadow$bridge = function(name) {
  const ret = ALL[name];
  if (ret == undefined) {
    throw new Error("Dependency: " + name + " not provided by external JS!");
  } else {
    return ret;
  }
};

ALL["comlink"] = {
  expose: i3.expose
};

ALL["@huggingface/transformers"] = {
  pipeline: i2.pipeline
};

ALL["hnswlib-wasm"] = {
  loadHnswlib: i1.loadHnswlib
};

ALL["path"] = {
  join: i0.join,
  parse: i0.parse
};
