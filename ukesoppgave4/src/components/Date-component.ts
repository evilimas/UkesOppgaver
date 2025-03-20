export class DateComponent {
    public Day: number
    public Month: number
    public Year: number
    public DateString: string
    public DayMonthOrYear: number
    
    public constructor(day: number, month: number, year: number){
        this.Day = day
        this.Month = month
        this.Year = year
        this.DateString = ""
    }
    public countUp(): number{
        return this.DayMonthOrYear++
    }
    public countDown(): number{
        return this.DayMonthOrYear--
    }
    public makeDateString(day: number,month: number,year: number): string {
        const dateString = `${day.toString()}-${month.toString()}-${year.toString()}`
        return dateString
    }
    public checkDateIsValid(DateString: string): Boolean{
        const date = new Date(DateString)
        return !isNaN(date.getTime())
    }
}
