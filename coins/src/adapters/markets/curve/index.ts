import getTokenPrices from "./curve";
import getGaugePrices from "./gauges";
import getSpareTokens from "./spares";

export function curve1(timestamp: number = 0) {
  console.log("starting curve1");
  return getTokenPrices("ethereum", ["crypto"], timestamp);
}
export function curve2(timestamp: number = 0) {
  console.log("starting curve2");
  return Promise.all([
    getTokenPrices("arbitrum", ["stableswap", "crypto"], timestamp),
    getTokenPrices("xdai", ["stableswap", "crypto"], timestamp),
    getTokenPrices("arbitrum", ["stableFactory", "cryptoFactory"], timestamp),
    getTokenPrices("xdai", ["stableFactory", "cryptoFactory"], timestamp),
  ]);
}
export function curve3(timestamp: number = 0) {
  console.log("starting curve3");
  return Promise.all([
    getTokenPrices("avax", ["stableswap", "crypto"], timestamp),
    getTokenPrices("fantom", ["stableswap", "crypto"], timestamp),
    getTokenPrices("avax", ["stableFactory", "cryptoFactory"], timestamp),
    getTokenPrices("fantom", ["stableFactory", "cryptoFactory"], timestamp),
  ]);
}
export function curve4(timestamp: number = 0) {
  console.log("starting curve4");
  return Promise.all([
    getTokenPrices("moonbeam", ["stableswap", "crypto"], timestamp),
    getTokenPrices("aurora", ["stableswap", "crypto"], timestamp),
    getTokenPrices("moonbeam", ["stableFactory", "cryptoFactory"], timestamp),
    getTokenPrices("aurora", ["stableFactory", "cryptoFactory"], timestamp),
  ]);
}
export function curve5a(timestamp: number = 0) {
  console.log("starting curve5a");
  return getTokenPrices("optimism", ["stableswap"], timestamp);
}
export function curve5b(timestamp: number = 0) {
  console.log("starting curve5b");
  return getTokenPrices("optimism", ["crypto"], timestamp);
}
export function curve5c(timestamp: number = 0) {
  console.log("starting curve5c");
  return getTokenPrices("optimism", ["cryptoFactory"], timestamp);
}
export function curve5d(timestamp: number = 0) {
  console.log("starting curve5d");
  return getTokenPrices("optimism", ["stableFactory"], timestamp);
}
export function curve6(timestamp: number = 0) {
  console.log("starting curve6");
  return getTokenPrices("polygon", ["stableswap", "crypto"], timestamp);
}
export function curve6b(timestamp: number = 0) {
  console.log("starting curve6b");
  return getTokenPrices("polygon", ["stableFactory"], timestamp);
}
export function curve6c(timestamp: number = 0) {
  console.log("starting curve6c");
  return getTokenPrices("polygon", ["cryptoFactory"], timestamp);
}
export function curve7(timestamp: number = 0) {
  console.log("starting curve7");
  return Promise.all([
    getTokenPrices("celo", ["stableswap", "crypto"], timestamp),
    getTokenPrices("celo", ["cryptoFactory", "stableFactory"], timestamp),
  ]);
}

export function ellipsis(timestamp: number = 0) {
  console.log("starting ellipsis");
  return getTokenPrices(
    "bsc",
    ["crypto", "stableswap", "stableFactory", "cryptoFactory"],
    timestamp,
  );
}
export function pcsStable(timestamp: number = 0) {
  console.log("starting PCS stableswap");
  return getTokenPrices("bsc", ["pcs"], timestamp, "pcs");
}
export function gauges(timestamp: number = 0) {
  console.log("starting gauges");
  return Promise.all([
    getGaugePrices("ethereum", timestamp),
    getGaugePrices("arbitrum", timestamp),
    getGaugePrices("polygon", timestamp),
    getGaugePrices("fantom", timestamp),
    getGaugePrices("optimism", timestamp),
    getGaugePrices("avax", timestamp),
    getGaugePrices("moonbeam", timestamp),
    getGaugePrices("xdai", timestamp),
    getGaugePrices("celo", timestamp),
  ]);
}
export function spares(timestamp: number = 0) {
  console.log("starting curve spares");
  return getSpareTokens("ethereum", timestamp, [
    {
      address: "0x7b0eff0c991f0aa880481fdfa5624cb0bc9b10e1",
      nCoins: "4",
      token: "0x21ead867c8c5181854f6f8ce71f75b173d2bc16a",
    },
  ]);
}