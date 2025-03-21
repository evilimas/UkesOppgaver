// export class DateComponent {
//     public Day: number
//     public Month: number
//     public Year: number
//     public DateString: string
    
    
//     public constructor(day: number, month: number, year: number){
//         this.Day = day
//         this.Month = month
//         this.Year = year
//         this.DateString = ""
//     }
    
//     //public makeDateString(day: number,month: number,year: number): string {
//       //  const dateString = `${day.toString()}-${month.toString()}-${year.toString()}`
//      //   return dateString
//     //}
//     //public checkDateIsValid(DateString: string): Boolean{
//         //const date = new Date(DateString)
//         //return !isNaN(date.getTime())
//     //}




    export class DateComponent {
        public Day: number;
        public Month: number;
        public Year: number;
        
        public constructor(day: number, month: number, year: number) {
            this.Day = day;
            this.Month = month;
            this.Year = year;
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
            return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
        }
    }