const log = console.log;

const pako = (function () {
  const node = typeof global !== "undefined" && Object.prototype.toString.call(global.process) === "[object process]";

  const err = (msg) => `pako internal error: ${msg}`;

  const th = (msg) => new Error(err(msg));

  const pako = (function () {
    let tmp;
    try {
      if (node) {
        tmp = require("pako");
      } else {
        tmp = pako;
      }
    } catch (e) {
      throw th(`preparing deflate failed: ${e}`);
    }
    if (typeof tmp === "undefined") {
      throw th(`preparing deflate failed: main lib is undefined`);
    }
    if (typeof tmp.deflate !== "function") {
      throw th(`preparing deflate failed: deflate lib is not a function`);
    }
    if (typeof tmp.inflate !== "function") {
      throw th(`preparing deflate failed: inflate lib is not a function`);
    }
    return tmp;
  })();

  const base64 = (function () {
    let tmp;
    try {
      if (node) {
        tmp = require("js-base64");
      } else {
        tmp = Base64;
      }
    } catch (e) {
      throw th(`preparing base64 failed: ${e}`);
    }
    if (typeof tmp === "undefined") {
      throw th(`preparing deflate failed: main lib is undefined`);
    }
    if (typeof tmp.fromUint8Array !== "function") {
      throw th(`preparing deflate failed: fromUint8Array lib is not a function`);
    }
    if (typeof tmp.fromUint8Array !== "function") {
      throw th(`preparing deflate failed: fromUint8Array lib is not a function`);
    }
    return tmp;
  })();

  return {
    encode: function (state) {
      state = JSON.stringify(state);
      const data = new TextEncoder().encode(state);
      const compressed = pako.deflate(data, { level: 9 });
      return base64.fromUint8Array(compressed, true);
    },
    decode: function (state) {
      const data = base64.toUint8Array(state);
      return JSON.parse(pako.inflate(data, { to: "string" }));
    },
  };
})();

const source = `eNqtVE2PmzAQ_SsjoohWDaB2q0p1E1ZNsurXVpW6vSU5GDyAu2BT25Rdhfz32kA-Vuqhh_o0Hr_3mDdjvPdSydAj3lZMp3suuCGwB7-U-S3-xtIn4DNMmtyfgW8KrNBlMqlQGx8OcJhOtyJXtC7gx3orwK73zzZ3hiqzew5BEHdUKdlCgZR1sNzUSqaoNSzlw26ALy0q6GSNAkou7jtY7RmnlRQM5knMMOWaSzGPkhhqyYU5DLSVozn9yUsopchRjfT1xhRc706oMAwtaoQwaQyyEfltwOgmGQycAsNLg8OhW4wrTI0tAm6_n7Or3l3Swc3GlmAKanaEEKc8YFCwc6WQFtT2VuSOBF9cRmZ9fOtix9L99uuZE3etFbVDUDCnUCjMFn5hTE2iKJcyLzFMZeXHjjuPaNzBx_3kFRwb9qRZH20bgs6dXvr_cJpGcppGj4y7Cxy03BTj_D79hbGGxWIRd7bp6f0o_Hk4mU7dHsGWWaEwQzItHW7V-4Gt5wxp66ht2_DsKtJIVVpc_1pkpWxf2OYps_UuBW7-VaBi4ilzeckciUI-Xb3EkabNY4mWlvGyJJPsbTbTRsl7JJOrq6sxDlrOTEFe1w_nC2LtZ0pWBI4lVqgqylnwU4e57WmThFwek9EkclZ7p9ecLdxH7XUJaCDs73msn2q9trVrWWG_OdX05t1_-m6qddBLo_Zm3giyr8Pe6W-9_gXYesSGDDPalP1YDhba1Mxe1hvGjVQeyWipcebRxsi7R5F6xKgGj6A1p_Y_q0bU4Q88_HfN`;

function test(input) {
  const dec = pako.decode(input);

  const output = pako.encode(dec);

  return {
    input,
    dec,
    output,
    eq: input === output,
  };
}

const one = test(source);

const two = test(one.output);

log({
  one,
  two,
});
