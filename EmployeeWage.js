// UC-1Checking if employee is present or absent.
{
    const IS_ABSENT = 0;
    let empcheck = Math.floor(Math.random() * 10) % 2;
    if(empcheck == IS_ABSENT){
    console.log("Employee is absent");
    }else {
    console.log("Employee is present");
    }
}

// UC2- Adding part time and full time conditions and calculating the wage for the hours worked.

    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;  
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;
{
    let empHrs = 0;
    let empcheck = Math.floor(Math.random() * 10) % 3;
    
    switch(empcheck){
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
    default:
        // console.log("Employee is absent");
        empHrs = 0;
}
    let empWage = WAGE_PER_HOUR * empHrs;
    console.log("Employee has earned = " + empWage + "$ working for " + empHrs +" hrs");
}

// UC3- Function to calculate the wage of the employee provided working hours and wage per hour.
{
    function getWorkingHrs(empcheck){
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

    let empcheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHrs(empcheck);
    let empWage = empHrs * WAGE_PER_HOUR;
    console.log("Employee has earned = " + empWage + "$ working for " + empHrs +" hrs");
}

// UC-4 -Calculating the wage for the employee for working days = 20
{
    const NUM_OF_WORKING_DAYS = 20;
    let totalEmpHrs = 0;
    let workedDays =0;
    for(let day = 0; day < NUM_OF_WORKING_DAYS;day++) {
        let empcheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHrs(empcheck);
        workedDays++;
    }
    let empWage = WAGE_PER_HOUR * totalEmpHrs;
    console.log("Employee has earned = " + empWage + "$ working for " + totalEmpHrs +" hrs "+workedDays+ " days");
}

// UC-5 Condition of working Hrs = 160 or no.of working days = 20.

{
    const TOTAL_WORKING_HOURS = 160;
    let workedDays =0;
    let totalEmpHrs = 0;
    while(totalEmpHrs < 160 && workedDays < 20) {
        let empcheck = Math.floor(Math.random() * 10) % 3;
        totalEmpHrs += getWorkingHrs(empcheck);
        workedDays++;
    }
    let empWage = WAGE_PER_HOUR * totalEmpHrs;
    console.log("Employee has earned = " + empWage + "$ working for " + totalEmpHrs +" hrs "+workedDays+ " total-days");
}

// UC-6 storing the daily wage along with the total wage.(using Array)
{
    const TOTAL_WORKING_HOURS = 160;
    let totalWorkingDays =0;
    let totalEmpHrs = 0;
    let employeeWageArray = new Array();
    
    function calcEmpWage(empHrs) {
        return empHrs * WAGE_PER_HOUR;
    }

    while(totalWorkingDays < 20 && totalEmpHrs < 160) {
        totalWorkingDays++;
        let empcheck = Math.floor(Math.random() * 10) % 3;
        let empHrs = getWorkingHrs(empcheck);
        totalEmpHrs += empHrs;
        employeeWageArray.push(calcEmpWage(empHrs));
    }
    let empWage = calcEmpWage(totalEmpHrs);
    console.log("Employee has earned = " + empWage + "$ working for " + totalEmpHrs +" hrs "+totalWorkingDays+ " total-days");


// UC7-A- Calculating total wage using Array forEach traversal.

    let totalEmpWage = 0;
    function sum(dailyWage) {
        totalEmpWage += dailyWage;
    }

    //for-each loop for array here calls the sum method everytime and dailywage is added to total emp wage (daily wage is the array element value).
    employeeWageArray.forEach(sum);
    console.log("Total days " + totalWorkingDays + " Total Hrs : " + totalEmpHrs + " total wage : " + totalEmpWage);

    //Using reduce method calculating the total emp wage.
    function totalWages(totalWage,dailyWage){
        return totalWage + dailyWage;
    }
    console.log("Total employee wage using reduce function : " + employeeWageArray.reduce(totalWages,0));


// UC7-B-Mapping daily wage to corresponding day using MAP.

    let dailyCntr = 0;
    function mapDayWithWage(dailyWage) {
        dailyCntr++;
        return dailyCntr + " = " + dailyWage;
    }
    let mapDayWithWageArray = employeeWageArray.map(mapDayWithWage);
    console.log("UC-7B-Daily wage map ");
    console.log(mapDayWithWageArray);

// UC7-C-To display the days of full time and half time.

    function fullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
    console.log("UC-7C- Daily wage filter when full wage is earned");
    console.log(fullDayWageArray);

    //similarly to find part-time work wage collection list
    function partTimeWage(dailywage) {
        return dailywage.includes("80");
    }
    let partTimeWageArray = mapDayWithWageArray.filter(partTimeWage);
    console.log(partTimeWageArray);

// UC7-D-To find the first occurence of full time wage (Using Find command).

    function findFullTimeWage(dailyWage) {
        return dailyWage.includes("160");
    }
    //find function returns the first element found that matches the condition.
    console.log("UC-7D-to find the first full time wage: " + mapDayWithWageArray.find(findFullTimeWage)); 


// UC7-E-To inspect whether all the element holds the full time wage in the array.

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
//To check whether all the elements in the array have same element.
console.log("UC-7E-To inspect all element has full time wage: " + fullDayWageArray.every(isAllFullTimeWage));

// UC7-E-To check for any part time wage.

function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}
//some checks for any one of the value among the array is matching the condition.
console.log("UC-7F-To find any part time wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

// UC-7G-Find the number of days the employee has worked.

let numOfDays = 0;
function totalDaysWorked(numOfDays,dailyWage) {
    if(dailyWage > 0) {
        return numOfDays+1;
    }
    return numOfDays;
}
    //Reduce function reduces the data by adding each of the previous value.
    console.log("UC-7G-Total worked days : " + employeeWageArray.reduce(totalDaysWorked, 0));

//UC-9- Using arrow function to solve the employee wage.
const findTotal = (totalValue,dailyValue) => {
    return totalValue + dailyValue;
}
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empWageArray.filter(dailyWage => dailyWage > 0).reduce(findTotal,0); 
console.log("UC-9A-calc total using arrow function: " + "Total Hrs: " + totalHours + " Total wages: " + totalSalary);
}

