function check_vote(age){
    console.log(age)
    if(age===18){ // === represents the strict or absolute equals
        console.warn("You are still 18!")
    } else if (age > 18){
        console.warn("You are eligible to vote!")
    } else {
        console.warn("You are not eligible to vote!")
    }
}

let ages = [1, 17, 18, 19, 24]


/*
for(initialization, condition, increment){
    body
}
*/
for(let i=0; i<ages.length; i++) {
    check_vote(ages[i])
}

let j = 0;
while (j!=ages.length) {
    check_vote(ages[j])
    j++
}

let k =0;
do {
    check_vote(ages[k])
    k++ 
} while(k!=ages.length)




