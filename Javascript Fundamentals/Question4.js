function extractGroups(pattern, str) {
    const regex = new RegExp(pattern);
    const match = str.match(regex);
    
    if (match) {
        return match.groups;
    } else {
        return null;
    }
}


const testString1 = "Today's date is 08/11/2024.";
const testString2 = "The event is scheduled for 12-25-2023.";


const datePattern1 = /(?<month>\d{2})\/(?<day>\d{2})\/(?<year>\d{4})/;
const datePattern2 = /(?<month>\d{2})-(?<day>\d{2})-(?<year>\d{4})/;


const extractedGroups1 = extractGroups(datePattern1, testString1);
console.log("Extracted Groups from testString1:", extractedGroups1); 


const extractedGroups2 = extractGroups(datePattern2, testString2);
console.log("Extracted Groups from testString2:", extractedGroups2);

