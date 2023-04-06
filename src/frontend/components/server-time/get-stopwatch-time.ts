const ONE_MINUTE = 60;
const ONE_HOUR = 60 * 60;

const addLeadingZero = (num: number): string => {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
};

export const getStopwatchTime = (seconds: number): string => {
  const hoursString = addLeadingZero(Math.floor(seconds / ONE_HOUR));
  const remainingSeconds = seconds % ONE_HOUR;
  const minutes = Math.floor(remainingSeconds / ONE_MINUTE);
  const minutesString = addLeadingZero(minutes);
  const secondsString = addLeadingZero(remainingSeconds % ONE_MINUTE);
  return `${hoursString}:${minutesString}:${secondsString}`;
};
