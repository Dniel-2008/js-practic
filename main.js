// let users = {
//     id: i,
//     name: 'abdulaziz',
//     image: "./Screenshots/Снимок экрана (3).png" ,
//     age: 16,
//     developer_type: 'front end'
// }

let users = [
{
id: 1,
name: 'ruslan',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png" ,
age: 15,
developer_type: 'frontend'
},
{
id: 2,
name: 'mairambek',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png" ,
age: 14,
developer_type: 'frontend'
},
{
id: 3,
name: 'nurjigit',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 14,
developer_type:'fullstack'
},
{
id: 4,
name: 'Daniel',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 14,
developer_type:'fullstack'
},
{
id: 5,
name: 'gulnura эжеке',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 23,
developer_type:'backend'
},
{
id: 6,
name: 'elburs',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 14,
developer_type:'fullstack'
},
{
id: 7,
name: 'saidislam',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 15,
developer_type:'fullstack'
},
{
id: 8,
name: 'girl',
image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
age: 15,
developer_type:'fullstack'
},
]

// // for, for of, map

let cont = document.querySelector('.container')

let imj = users.map(i =>
`<div class="block">

<img width = '196px' src="${i.image}" alt="">
<p> ${i.name} </p>
<p> ${i.developer_type} </p>
<p> ${i.age} </p>

</div>`
)

cont.innerHTML = imj

let fill = users.filter(dan => dan.developer_type == "frontend")
console.log(fill);
let cont1 = document.querySelector('.container1')
let front = fill.map(i =>
 `<div class="block">
        <img width = '196px' src="${i.image}" alt="">
        <p> ${i.name} </p>
        <p> ${i.developer_type} </p>
        <p> ${i.age} </p>
        </div>`
        )
    cont1.innerHTML = front

// function onc() {
//     alert('ee')
// }

// let inp = document.querySelectorAll('input')
// console.log(inp);
// document.querySelector('button').addEventListener('click' , function(){
// if (inp[1].value.length > 5) {
//     alert('yes')
// } else {
//     alert('no')
// }
// })

let fi = users.filter(dan => dan.developer_type == "backend")
console.log(fi,'lkjokj');
// fi =  [ 
    // {
//     id: 8,
//     name: 'girl',
//     image: "https://www.pinclipart.com/picdir/big/411-4110588_img-img-title-waves-logo-clipart.png",
//     age: 15,
//     developer_type:'fullstack'
//     }
// ]

let con2 = document.querySelector('.cont2')

let blockbac = `<div class="block  ">
        <img width = '196px' src="${fi[0].image}" alt="">
        <p> ${fi[0].age} </p>
        <p> ${fi[0].name}</p>
        <p> ${fi[0].developer_type} </p>
        </div>
        
`
con2.innerHTML = blockbac

// let blocblack = `<div class="block">
//         <img width = '196px' src="${cont2[0].image}" alt="">
//         <p> ${cont2[0].age} </p>
//         <p> ${cont2[0].name}</p>
//         <p> ${cont2[0].developer_type} </p>
//     `
    