export class DateComponent {
  public Day: number;
  public Month: number;
  public Year: number;

  public constructor(day: number, month: number, year: number) {
    this.Day = day;
    this.Month = month;
    this.Year = year;
  }
  public makeDateString(day: number, month: number, year: number): string {
    let dayStr = "";
    let monthStr = "";
    if (day <= 9) {
      dayStr = `0${day.toString()}`;
    } else {
      dayStr = `${day.toString()}`;
    }
    if (month <= 9) {
      monthStr = `0${month.toString()}`;
    } else {
      monthStr = `${month.toString()}`;
    }
    const dateString = `${dayStr} ${monthStr} ${year.toString()}`;
    return dateString;
  }
  public checkDateIsValid(Day: number, Month: number, Year: number): boolean {
    if (Month < 1 || Month > 12) return false;

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (Month === 2 && this.isLeapYear(Year)) {
      return Day >= 1 && Day <= 29;
    }

    return Day >= 1 && Day <= daysInMonth[Month - 1];
  }

  private isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
}
