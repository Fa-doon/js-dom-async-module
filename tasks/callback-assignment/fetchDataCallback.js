function fetchDataWithCallback(callback) {
    setTimeout(function() {
        // let error = true;
        try {
            // if (error) {
            //     console.log("Fetch failed");
            // }

            callback('Data Fetched')
        } catch (error) {
            console.log("Error: Fetch failed", error);
        }
    }, 2000)
}

fetchDataWithCallback((data) => {
console.log(data)
})