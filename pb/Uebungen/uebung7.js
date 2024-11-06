const matrix = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331]
];

function minPathSum(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
    const dp = [];

    // Initialize dp array with zeros
    for (let i = 0; i < rows; i++) {
        dp[i] = [];
        for (let j = 0; j < cols; j++) {
            dp[i][j] = 0;
        }
    }

    dp[0][0] = matrix[0][0];

    // Fill the first row
    for (let j = 1; j < cols; j++) {
        dp[0][j] = dp[0][j - 1] + matrix[0][j];
    }

    // Fill the first column
    for (let i = 1; i < rows; i++) {
        dp[i][0] = dp[i - 1][0] + matrix[i][0];
    }

    // Fill the rest of the dp table
    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + matrix[i][j];
        }
    }

    return dp[rows - 1][cols - 1];
}

console.log("Niedrigster Gesamtwert:",minPathSum(matrix)); // Output: 2427

//! out rednumbers

const matrix1 = [
    [131, 673, 234, 103,  18],
    [201,  96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524,  37, 331]
];

const redNumbers = [234, 342, 746, 121, 37];

function isRedNumber(num, redNumbers) {
    for (let i = 0; i < redNumbers.length; i++) {
        if (redNumbers[i] === num) return true;
    }
    return false;
}

function findMinPathSum(matrix1, redNumbers) {
    const n = matrix1.length;
    const dp = [];

    // Initialize DP matrix
    for (let i = 0; i < n; i++) {
        dp[i] = [];
        for (let j = 0; j < n; j++) {
            dp[i][j] = Infinity;
        }
    }

    // Set starting point
    dp[0][0] = matrix1[0][0];

    // Fill DP matrix
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i === 0 && j === 0) continue;

            let fromTop = i > 0 ? dp[i-1][j] : Infinity;
            let fromLeft = j > 0 ? dp[i][j-1] : Infinity;

            if (!isRedNumber(matrix1[i][j], redNumbers)) {
                dp[i][j] = Math.min(fromTop, fromLeft) + matrix[i][j];
            } else {
                dp[i][j] = Math.min(fromTop, fromLeft);
            }
        }
    }

    return dp[n-1][n-1];
}

const result = findMinPathSum(matrix1, redNumbers);
console.log("Niedrigster Gesamtwert:", result);