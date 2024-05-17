import { processArray } from "./Manipulation";
import { formatArrayStrings } from "./Manipulation";

function createUserProfiles(names) {
  const numbers = names.map((_, index) => index + 1); // Generate numbers based on the names array length
  const processedNumbers = processArray(numbers);
  const modifiedNames = formatArrayStrings(names, processedNumbers);
  
  return names.map((element, index) => {
    return {
      id: index + 1,
      originalName: element,
      nameModified: modifiedNames[index]
    };
  });
}

// Example usage:
const names = ["Alice", "Bob", "Charlie"];
const profiles = createUserProfiles(names);
console.log(profiles);
