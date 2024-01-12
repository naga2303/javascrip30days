//How to convert a value to a safe integer using JavaScript ?
//Safe Integers are integers between -(2^53 – 1) and (2^53 – 1)
const input = prompt('Please enter unsafe integer:');
            let mini = Math.min(input,Number.MAX_SAFE_INTEGER);
            let maxi = Math.max(mini,Number.MIN_SAFE_INTEGER);
            const safeInt = Math.round(maxi);