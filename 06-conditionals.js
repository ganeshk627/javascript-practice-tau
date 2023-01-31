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

function largest_of_three(a, b, c) {
    if (a>b && c<a){
        console.warn("a is large")
    } else if (b>a && b>c){
        console.warn("b is large")
    } else {
        console.warn("c is large")
    }
}

function odd_man_out(a, b, c){
    
}

/*
write program to check leap year of the given number here
*/

let ages = [1, 17, 18, 19, 24]
check_vote(ages[1])
check_vote(ages[2])
check_vote(ages[4])

largest_of_three(10,30,20)


