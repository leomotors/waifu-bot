const b = ":black_large_square:";
const r = ":red_square:";
const o = ":orange_square:";
const p = ":purple_square:";
const g = ":green_square:";

function t(char: string) {
  return `:regional_indicator_${char}:`;
}

function text1(char: string) {
  return b + b + t(char) + b + b;
}

function text2(char: string) {
  return b + t(char) + b + t(char) + b;
}

function text3(char: string) {
  return t(char) + b + b + b + t(char);
}

function text4(char: string) {
  let bp = "";
  const rand = Math.random() * 3;
  if (rand < 1) bp = r + o + o;
  else if (rand < 2) bp = o + r + r;
  else if (rand < 3) bp = p + g + g;
  else bp = g + p + p;
  return t(char) + bp + t(char);
}

export enum HelixError {
  ILLEGAL_CHAR,
  ILLEGAL_LEN,
}

export function makeHelix(text: string): string[] | HelixError {
  text = text.toLowerCase().replaceAll(" ", "");

  if (!text.match(/^[a-z]+$/i)) return HelixError.ILLEGAL_CHAR;

  if (text.length > 100) return HelixError.ILLEGAL_LEN;

  let lines = 1;
  let helix = text3(text[0]!);
  const toSend: string[] = [];

  for (let i = 1; i < text.length; i++) {
    lines++;

    if (i % 6 < 1) helix += "\n" + text3(text[i]!);
    else if (i % 6 < 2) helix += "\n" + text4(text[i]!);
    else if (i % 6 < 3) helix += "\n" + text2(text[i]!);
    else if (i % 6 < 4) helix += "\n" + text1(text[i]!);
    else if (i % 6 < 5) helix += "\n" + text2(text[i]!);
    else helix += "\n" + text4(text[i]!);

    if (lines >= 5) {
      toSend.push(helix);
      lines = 0;
      helix = "";
    }
  }

  if (lines > 0) toSend.push(helix);

  return toSend;
}

export function formatTime(ms_timestamp: number) {
  const t = Math.round(ms_timestamp / 1000);

  return `<t:${t}> (<t:${t}:R>)`;
}
