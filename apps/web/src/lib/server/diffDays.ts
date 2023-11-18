export function diffDays(begin: Date, end: Date) {
  const days =
    Math.round((end.getTime() - begin.getTime()) / (1000 * 3600 * 24)) + 1;

  return {
    begin,
    end,
    days,
  };
}
