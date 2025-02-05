const p1 = Promise.resolve("Resolved");
const p2 = Promise.reject("Rejected");
Promise.allSettled([p1, p2])
    .then((res) => {
        res.forEach((result) => {
            console.log(result.status,
                result.value || result.reason);
        });
    });
        