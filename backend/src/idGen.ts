const CUSTOMEPOCH = 1300000000000; // artificial epoch

export function generateId() {
  const shardId = Math.floor(Math.random() * 65);
  var ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent
  var randid = Math.floor(Math.random() * 512);
  ts = ts * 64; // bit-shift << 6
  ts = ts + shardId;
  return String(ts * 512 + randid);
}
