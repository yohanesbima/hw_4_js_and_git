function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function generateRandomArray(length, min, max) {
    const randomArray = [];
    for (let i = 0; i < length; i++) {
      randomArray.push(generateRandomNumber(min, max));
    }
    return randomArray;
  }
  
  function separateArraysByIndex(originalArray) {
    const evenArray = [];
    const oddArray = [];
    for (let i = 0; i < originalArray.length; i++) {
      if (i % 2 === 0) {
        evenArray.push(originalArray[i]);
      } else {
        oddArray.push(originalArray[i]);
      }
    }
    return [evenArray, oddArray];
  }
  
  function findMin(array) {
    return array.reduce((min, current) => (current < min ? current : min), array[0]);
  }
  
  function findMax(array) {
    return array.reduce((max, current) => (current > max ? current : max), array[0]);
  }
  
  function calculateTotal(array) {
    return array.reduce((sum, current) => sum + current, 0);
  }
  
  function calculateAverage(array) {
    return calculateTotal(array) / array.length;
  }
  
  // Generate random array with 100 elements (values between 1 and 50)
  const originalArray = generateRandomArray(100, 1, 50);
  
  // Separate the arrays into even and odd indexed elements
  const [evenArray, oddArray] = separateArraysByIndex(originalArray);
  
  // Calculate min, max, total, and average for both arrays
  const minEven = findMin(evenArray);
  const maxEven = findMax(evenArray);
  const totalEven = calculateTotal(evenArray);
  const averageEven = calculateAverage(evenArray);
  
  const minOdd = findMin(oddArray);
  const maxOdd = findMax(oddArray);
  const totalOdd = calculateTotal(oddArray);
  const averageOdd = calculateAverage(oddArray);
  
  // Compare the values between the arrays
  const minComparison = minEven > minOdd ? "Min lebih besar pada array genap" : "Min lebih besar pada array ganjil";
  const maxComparison = maxEven > maxOdd ? "Max lebih besar pada array genap" : "Max lebih besar pada array ganjil";
  const totalComparison = totalEven === totalOdd ? "Total memiliki nilai yang sama pada kedua array" : "Total berbeda pada kedua array";
  const avgComparison = averageEven > averageOdd ? "Rata-rata lebih besar pada array genap" : "Rata-rata lebih besar pada array ganjil";
  
  // Output
  console.log("a. Array dengan jumlah index 100:");
  console.log(originalArray);
  console.log("b. Array genap dengan jumlah index 50:");
  console.log(evenArray);
  console.log("c. Array ganjil dengan jumlah index 50:");
  console.log(oddArray);
  console.log("d. Min, Max, Total, Rata-rata pada setiap array (genap dan ganjil):");
  console.log(`Genap: Min: ${minEven}, Max: ${maxEven}, Total: ${totalEven}, Rata-rata: ${averageEven}`);
  console.log(`Ganjil: Min: ${minOdd}, Max: ${maxOdd}, Total: ${totalOdd}, Rata-rata: ${averageOdd}`);
  console.log("e. Perbandingan nilai min, max, total, dan rata-rata:");
  console.log(minComparison);
  console.log(maxComparison);
  console.log(totalComparison);
  console.log(avgComparison);
  