for (let i = 1; i <= 3; i++){
for (let j = 1; j <= 3; j++){ 
process.stderr.write(`i=${i} j=${j},`);
}
process.stderr.write('\n');
}


for(let i=1; i<=5; i++){
    for(let j=10; j=13; j++){
        for (let k=1; k<=3; k++){
            console.log(k);
            if(k==2) break;
        }
    }
}