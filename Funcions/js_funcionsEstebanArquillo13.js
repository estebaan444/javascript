var null13 = (a, b) => {
    if (a != null && b == null)
        return a;
    else if (a == null && b != null)
        return b;
    else if (a != null && b != null)
        return [a, b];
}
console.log(null13(4, null));