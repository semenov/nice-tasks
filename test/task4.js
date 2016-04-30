'use strict';

const assert = require('assert');
const scheduleMeeting = require('../src/task4');

const schedules = [
  [['09:00', '11:30'], ['13:30', '16:00'], ['16:00', '17:30'], ['17:45', '19:00']],
  [['09:15', '12:00'], ['14:00', '16:30'], ['17:00', '17:30']],
  [['11:30', '12:15'], ['15:00', '16:30'], ['17:45', '19:00']]
];

describe('Task 4: meeting scheduler', () => {
  it('finds earlist time for the meeting', () => {
    assert(scheduleMeeting(schedules, 60) == '12:15');
  });

  it('retuns null if the meeting does not fit into the schedules', () => {
    assert(scheduleMeeting(schedules, 60 * 10) == null);
  });
});
