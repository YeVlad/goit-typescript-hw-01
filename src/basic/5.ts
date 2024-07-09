enum DayOfWeek {
      Monday = "work",
      Tuesday = "work",
      Wednesday = "work",
      Thursday = "work",
      Friday = "work",
      Saturday = "weekend",
      Sunday = "weekend"
    }
    
    
    const isWeekend = (day:string):boolean => {
        if (day === "work"){
            return false
        }else{
            return true
        }
    }
    
    