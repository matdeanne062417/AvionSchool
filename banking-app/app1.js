
// function food(){
//     if (true) {
//         var fruit = 'apple';
//         fruit2 = 'lemon';
//     }
//     console.log(fruit);
//     console.log(fruit2);
// }
// food();

// let firstName = 'John';
// let lastName = 'Smith';
// const yearOfBirth = 1990;

// function calcAge(year){
//     return 2016 - year;
// }

// console.log('this is' + firstName + ' ' + lastName + 'He was born in' + yearOfBirth + 'today, he is ' + calcAge(yearOfBirth) + 'years old');

function getRecipe(){
    setTimeout(() => {
        const recipeID = [234, 423, 123, 134, 123]
        console.log(recipeID)

        setTimeout(id => {
            const recipe = {title: 'fresh tomato pasta', publisher: 'jonas'}
            console.log(`${id}: ${recipe.title}`)
        },1500, recipeID[2])
    }, 1500)
}

getRecipe()