function parityIdentifier(maxCount) {
    for (var i = 0; i <= maxCount; i++) {
        if (i % 2 == 0) {
            console.log(i + " is an even number")
        } else {
            console.log(i + " is an odd number")
        }
    }
}
parityIdentifier(20);