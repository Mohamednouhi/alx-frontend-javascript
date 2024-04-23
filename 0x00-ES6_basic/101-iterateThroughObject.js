export default function iterateThroughObject(reportWithIterator) {
  // Initialize an empty string to hold concatenated employee names
  let result = '';

  // Iterate through the iterator and concatenate employee names
  for (const item of reportWithIterator) {
    // Add each employee name to the result string
    result += item + ' | ';
  }

  // Remove the trailing ' | ' from the end of the result string
  result = result.slice(0, -3);

  // Return the final concatenated string
  return result;
}
