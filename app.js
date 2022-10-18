// var cleanestCities = ['Cheyenne', 'Santa Fe', 'Tucson', 'Great Falls', 'Honolulu']

// if (cityToCheck === cleanestCities[0]){
//     alert("It's one of the cleanest citites");
// }
// else if (cityToCheck === cleanestCities[1]){
//     alert("It's one of the cleanest citites");
// }
// else if (cityToCheck === cleanestCities[2]){
//     alert("It's one of the cleanest citites");
// }
// else if (cityToCheck === cleanestCities[3]){
//     alert("It's one of the cleanest citites");
// }
// else if (cityToCheck === cleanestCities[4]){
//     alert("It's one of the cleanest citites");
// }
// else {
//     alert("It's not on the list")
// }

// for ( var i = 0; i <= 4; i++){
//     if ( cityToCheck === cleanestCities[i]){
//         alert("It's one of the cleanest citites")
//     }
// }



// function decaralation

// function greet(){
//     console.log('Hello World')
// }


//function expression

// const speak = function(){
//     console.log('good day')
// }
// speak()
// speak()
// speak()

// const speak = function() {
//     console.log('Good Day!')
// }
//speak()


// const speak = function(namee, time) {
//     console.log(`Good ${time} ${namee}`)
// }
// speak('mario', 'morning')


// const speak = function(namee = 'luigi', time = 'night'){
//     console.log(`Good ${time} ${namee}`)
// }
// speak()
// speak('shaun')


// const calcArea = function(radius) {
//     let area = 3.14 * radius**2
//     console.log(area)
// }
// calcArea(5)


// const calcArea = function(radius) {
//     let area = 3.14 * radius**2
//     return area
// }
// const area = calcArea(5)
// console.log(area)


//OBJECTS

// const user = {
//     namee: 'crystal',
//     age: '30',
//     email: 'crystal@thenrtninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '10 things to make with marmite']
// }
// console.log(user)
// console.log(user.namee)

// user.age = 35
// console.log(user.age)

// console.log(user['email'])

// user['namee'] = 'chun-li'
// console.log(user['namee'])



// const user = {
//     namee: 'crystal',
//     age: '30',
//     email: 'crystal@thenrtninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '10 things to make with marmite'],
//     login: function(){
//         console.log('the user logged in')
//     },
//     logout: function(){
//         console.log('the user logged out')
//     },
//     logBlogs: function(){
//         console.log(this)
//     }
// }

// user.login()
// user.logout()
// user.logBlogs()
// console.log(this)


// console.log(Math)
// console.log(Math.PI)
// console.log(Math.E)

// const area = 7.7
// console.log(Math.round(area))

// const areaa = 7.3
// console.log(Math.round(areaa))


// const are = 7.7 
// console.log(Math.floor(are))


// const aree = 7.4
// console.log(Math.ceil(aree))

// const random = Math.random()
// console.log(random)


const userOne = {name: 'ryu', age: 30}
const userTwo = userOne

console.log(userOne, userTwo)

userOne.age = 40
console.log(userOne, userTwo)

