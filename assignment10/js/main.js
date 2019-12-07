functin duplicateMenu() {
  // get all of the anchor elements from the top menu // <a> is anchor
 let topList = document.querySelectorAll('ul#primaryNavigation li a') //tech a node list has array like behavior

 // create the new list items for the bottom of page
 let newList = document.createElement('ul')

 // take all of toplist and insert into bottom list, array helper named forEach makes easy
//              (param => {} )
 topList.forEach(meanuItem => {
     let newLI = document.createElement('li')
     let newLink = document.createElement('a')
     newLink.setAttribute('href', meanuItem.getAttribute('href'))
     // 'copy' the textContent from upper menu to new menu
     // append children to make them appear in the DOM
     //under 600px is size limit
 })
}

duplicateMenu()
