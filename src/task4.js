'use strict';

const dayStart = timeStringToInt('9:00');
const dayEnd = timeStringToInt('19:00');

function timeStringToInt(timeString) {
  const timeParts = timeString.split(':');
  const hours = Number(timeParts[0]);
  const minutes = Number(timeParts[1]);

  return hours * 60 + minutes;
}

const padTime = n => (n < 10 ? '0' + n : n);

function intToTimeString(int) {
  const hours = Math.floor(int / 60);
  const minutes = int % 60;

  return padTime(hours) + ':' + padTime(minutes);
}

function scheduleMeeting(schedules, meetingLengthInMinutes) {
  const workday = new Array(dayEnd - dayStart);
  schedules.forEach(schedule => {
    schedule.forEach(item => {
      const start = timeStringToInt(item[0]) - dayStart;
      const end = timeStringToInt(item[1]) - dayStart;

      workday.fill(true, start, end);
    });
  });

  let freeMinutes = 0;
  let slotStart = 0;
  let result = null;

  for (let i = 0; i < workday.length; i++) {
    const isBusyMinute = workday[i];

    if (isBusyMinute) {
      freeMinutes = 0;
    } else {
      if (freeMinutes == 0) {
        slotStart = i;
      }

      freeMinutes++;

      if (freeMinutes == meetingLengthInMinutes) {
        result = intToTimeString(slotStart + dayStart);
        break;
      }
    }
  }

  return result;
}

module.exports = scheduleMeeting;
