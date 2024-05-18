export const amPmIndicator=()=>{
    const date = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const timeString = date.toLocaleTimeString(undefined, options);

    return timeString.split(" ")[1];
}

export function formatedDate(){
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const formattedDay = new Date().getDate().toString().padStart(2, "0");
    const month = new Date().getMonth();
    const dateString = `Today ${formattedDay} ${monthNames[month]}`;
    return dateString;
}