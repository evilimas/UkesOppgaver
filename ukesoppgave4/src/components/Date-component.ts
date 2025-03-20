export class DateComponent {
    private Day: number
    private Month: number
    private Year: number
    private DateString: string
    
    public constructor(day: number, month: number, year: number){
        this.Day = day
        this.Month = month
        this.Year = year
        this.DateString = ""
    }

    public makeDateString(day: number,month: number,year: number): string {
        const date = `${day.toString()}-${month.toString()}-${year.toString()}`
        return date
    }
    public checkDateIsValid(DateString: string){
        const date = new Date(DateString)
        return !isNaN(date.getTime())
    }
}
