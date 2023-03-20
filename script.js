const fullName = document.querySelector('#full-name')
const age = document.querySelector('#age')
const address = document.querySelector('#address')
const male = document.querySelector('#male')
const female = document.querySelector('#female')
const genders = document.querySelectorAll('.gender')
const inputs = document.querySelectorAll('input')
const inputText = document.querySelectorAll('.input-text')

const fullNameP = document.querySelector('#fullname-p')
const ageP = document.querySelector('#age-p')
const addressP = document.querySelector('#address-p')

const addBtn = document.querySelector('#add')

const cardsBlock = document.querySelector('.cards-block')

addBtn.addEventListener('click', ()=> {
    let checked 
    if(male.checked) {
        checked = male.value
    } else if(female.checked) {
        checked = female.value
    }

    const fullNameValue = fullName.value
    const splited = fullNameValue.split(' ')


    cardsBlock.innerHTML +=
     `<div class="card">
        <p>First Name :</p>
        <p>${splited[0]}</p>
        <p>Last Name :</p>
        <p>${splited[1]}</p>
        <p>Age :</p>
        <p>${age.value}</p>
        <p>Address :</p>
        <p>${address.value}</p>
        <p>Gender :</p>
        <p>${checked}</p>
        
    </div>`

    genders.forEach((gender) =>{
        if(gender.checked) {
            gender.checked = false
            console.log(123);
            return gender.value
        }
    })

    inputText.forEach((input)=> {
        input.value = ''
    })

})

