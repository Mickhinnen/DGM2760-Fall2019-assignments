
     //make more generic by getAPIData(url)
async function getHotelData() {
 try {
    const reponse = await fetch ('../hotel.json')
    return await reponse.json() //return json object
 }   catch (error) {
     console.error(error)
 }
}

let hotelData = {}
getHotelData().then(data => hotelData = data)

//console.log(hotelData)
// store this in a variable = document.querySelectorAll("a")
//let guestChoice = document.querySelectorAll("a")
//use that variable to loop over each element and addEventListener to each one
//suggested use of forEach
//guestChoice.forEach(chosen => {
  //  document.querySelector(`#.id`).addEventListener('click', hotelInfo) // #hotels doesn't work
document.querySelector("#marriott").addEventListener('click', hotelInfo)
document.querySelector("#sheraton").addEventListener('click', hotelInfo)
document.querySelector("#hilton").addEventListener('click', hotelInfo)
//})

function hotelInfo(event) {
    let hotelChoice = hotelData.hotels.find(hotel => {
        return event.target.id === hotel.name.toLowerCase()
    })
    console.log(hotelChoice)

    document.querySelector('#hotelName').textContent = `${hotelChoice.name} Hotel`
    document.querySelector('#address').textContent = `${hotelChoice.address}`
    document.querySelector('#rooms').textContent = `${hotelChoice.rooms}`
    document.querySelector('#gym').textContent = `${hotelChoice.gym}`
    document.querySelector('#type').textContent = `${hotelChoice.roomTypes}`
    let imagePath = `${hotelChoice.picture}` //apparently order matters, getting closer though broken image instead of no image
    document.querySelector('#picture').setAttribute('src', imagePath)//assignment 3 google says otherwise, also duh
    
   
}
