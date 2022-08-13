export function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  seconds %= 60;

  return `${mins}:${seconds >= 10 ? seconds : "0" + seconds}`;
}
