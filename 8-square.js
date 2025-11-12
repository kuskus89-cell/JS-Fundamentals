const size = process.argv[2];
if(!isNaN(size)){
    const n = Number(size);
    for(let i=0; i<n; i++){
        console.log('x'.repeat(n));
}
} else {
    console.log("Missing size");
}
