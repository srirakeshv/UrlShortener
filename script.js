// hamburger menu
let menuIcon=document.querySelector('.menuicon')
let navBar=document.querySelector('nav')

menuIcon.addEventListener('click',()=>{
    navBar.classList.toggle('open1')
})

// input shortenurl
let inputUrl=document.querySelector('input')
let shortenItButton=document.querySelector('#shortenit')
let errorMessage=document.querySelector("#error")
let coverContent=document.querySelector('.covercontent')
let linkSection=document.querySelector('.links')

shortenItButton.addEventListener('click',()=>{
    let url=inputUrl.value
    if(url==='')
    {
        errorMessage.innerHTML='Please enter a link'
        coverContent.classList.add('border')
    }
    else{
        errorMessage.innerHTML=''
        coverContent.classList.remove('border')
        linkCall()
        shortLinkk(url)
        inputUrl.value=''
    }
})

// fetch api
// function link call
function linkCall(){
    let divCover=document.createElement('div')
    divCover.className='shorten-link'
    divCover.innerHTML=`
        <p class="oldlink"></p>
        <div class="newlink">
          <p class="new"></p>
          <button type="button"></button>
        </div>
    `
    let oldLink=divCover.querySelector('.oldlink')
    let newLink=divCover.querySelector('.new')
    let copyButton=divCover.querySelector('.newlink button')

    
    
    
    oldLink.innerHTML=inputUrl.value
    newLink.innerHTML='hi hello'
    copyButton.innerHTML='copy'

    linkSection.appendChild(divCover)
}
async function shortLinkk(url){
    try{
        const res=await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
        const data=await res.json()
        console.log(data)
        if (data.ok) {
            // Access the shortened URL from the response data
            const shortenedURL = data.result.full_short_link;
            console.log(shortenedURL)
            // Update your UI or do whatever you want with the shortened URL
        } else {
            // Handle API error
            console.log(data.error);
        }
    }
    catch(error){
        console.log(error)
    }
}