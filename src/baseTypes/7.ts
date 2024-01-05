/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWorkingToday(day: DaysOfWeek): boolean {
  switch (day) {
    case DaysOfWeek.Saturday:
    case DaysOfWeek.Sunday:
      return false;

    default:
      return true;
  }
}
