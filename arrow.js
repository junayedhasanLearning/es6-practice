const multi = (x,y) => {
    const sum = x + y;
    const diff = x-y;
    return sum * diff;
};

const total = multi(12,11);
console.log(total);