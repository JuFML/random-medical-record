//  function getAPIInfo () {
//     let req = fetch ('https://randomuser.me/api/')
//         .then(function(result) {
//             return result.json()
//         })
//         .then(function(json){
//             const [user] = json.results

//             const nameTitle = document.querySelector('.nameTitle')
//             const nameInfo = document.querySelector('.nameInfo')
//             const ageInfo = document.querySelector('.ageInfo')
//             const genderInfo = document.querySelector('.genderInfo')
//             const adressInfo = document.querySelector('.adressInfo')
//             const numberInfo = document.querySelector('.numberInfo')
//             const cityInfo = document.querySelector('.cityInfo')
//             const stateInfo = document.querySelector('.stateInfo')
//             const countryInfo = document.querySelector('.countryInfo')
//             const phoneInfo = document.querySelector('.phoneInfo')
//             const cellInfo = document.querySelector('.cellInfo')
//             const emailInfo = document.querySelector('.emailInfo')
//             const image = document.querySelector('img')

//             nameTitle.textContent = `${user.name.first} ${user.name.last}`
//             nameInfo.textContent = `${user.name.first} ${user.name.last}`
//             ageInfo.textContent = `${user.dob.age}`
//             genderInfo.textContent = `${user.gender}`
//             adressInfo.textContent = `${user.location.street.name}`
//             numberInfo.textContent = `${user.location.street.number}`
//             cityInfo.textContent = `${user.location.city}`
//             stateInfo.textContent = `${user.location.state}`
//             countryInfo.textContent = `${user.location.country}`
//             phoneInfo.textContent = `${user.phone}`
//             cellInfo.textContent = `${user.cell}`
//             emailInfo.textContent = `${user.email}`
//             image.src = `${user.picture.large}`                
//         });
//         }

// getAPIInfo()

async function getAPIInfo () {
    let req = await fetch ('https://randomuser.me/api/')
    let json = await req.json()
       
    const [user] = json.results   
    const $ = document.querySelector.bind(document) 

    const nameTitle = $('.nameTitle')
    const nameInfo = $('.nameInfo')
    const ageInfo = $('.ageInfo')
    const genderInfo = $('.genderInfo')
    const adressInfo = $('.adressInfo')
    const numberInfo = $('.numberInfo')
    const cityInfo = $('.cityInfo')
    const stateInfo = $('.stateInfo')
    const countryInfo = $('.countryInfo')
    const phoneInfo = $('.phoneInfo')
    const cellInfo = $('.cellInfo')
    const emailInfo = $('.emailInfo')
    const image = $('img')

    nameTitle.textContent = `${user.name.first} ${user.name.last}`
    nameInfo.textContent = `${user.name.first} ${user.name.last}`
    ageInfo.textContent = `${user.dob.age}`
    genderInfo.textContent = `${user.gender}`
    adressInfo.textContent = `${user.location.street.name}`
    numberInfo.textContent = `${user.location.street.number}`
    cityInfo.textContent = `${user.location.city}`
    stateInfo.textContent = `${user.location.state}`
    countryInfo.textContent = `${user.location.country}`
    phoneInfo.textContent = `${user.phone}`
    cellInfo.textContent = `${user.cell}`
    emailInfo.textContent = `${user.email}`
    image.src = `${user.picture.large}`                
}

getAPIInfo()

