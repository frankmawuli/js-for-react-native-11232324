import { processArray } from "./arrayManipulation";
import { formatArrayStrings } from "./arrayManipulation";

function createUserProfiles(names) {
  const numbers = names.map((_, index) => index + 1); 
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

