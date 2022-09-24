/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    let positive = 0, negative = 0, zeros = 0;
    const n = arr.length || 0;
    
    if(n > 0 && n <= 100) {
        arr.map((elem, key) => {
            if (elem > 0) {
                positive++;
            } else if (elem < 0) {
                negative++;
            } else {
                zeros++;
            }
            return elem;
        });
    }
    
    console.log((positive / n) || 0);
    console.log((negative / n) || 0);
    console.log((zeros / n) || 0); 

}
