
exports.min = function min (array) {
    if (array === undefined) {
        return 0;
    } else if (array.length) {
        return Math.min.apply(null, array);
    } else {
        return 0;
    }
}

exports.max = function max (array) {
   if (array === undefined) {
        return 0;
    } else if (array.length) {
        return Math.max.apply(null, array);
    } else {
        return 0;
    }
}

exports.avg = function avg (array) {
 if (array === undefined) {
        return 0;
    } else if (array.length) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i];
        }
        let avg = total / array.length;
        return avg;
    } else {
        return 0;
    }
}
