export const  transformDateFormat = () => {
    const month = new Date().toLocaleString("en-US", { month: "2-digit" });
    const day = new Date().toLocaleString("en-US", { day: "2-digit" });
    const year = new Date().getFullYear();
    const time = new Date().toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hourCycle: "h23",
    });
  
    const newFormatDate = year.toString().concat("-", month, "-", day, " ", time);
    return newFormatDate;
}