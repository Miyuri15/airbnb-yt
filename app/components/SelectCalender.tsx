'use client'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range' ;

export function SelectCalender(){
    return(
        <DateRange 
        date={new Date()}
        showDateDisplay={false}
        rangeColors={["#FF5A5F"]}
        />
        
    )
}