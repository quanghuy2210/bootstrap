function handleBgColor(event) {
  const boxElement = document.getElementsByClassName('color-background')
  const colorAttr = event.getAttribute('color-bg')
  const colorAttrNavBar = event.getAttribute('color-bg-navbar')
  if (boxElement.length) {
    for (let key in boxElement) {
      console.log(key)
       if (key == 0){
        boxElement[key].style.backgroundColor = colorAttrNavBar
       } 
       else if (key > 0) {
         boxElement[key].style.backgroundColor = colorAttr
       }
    }
  };
}

// function handleBgColor(event) {
//     const boxElement = document.getElementsByClassName('color-background')
//     const colorAttr = event.getAttribute('color-bg')
//     const colorAttrNavBar = event.getAttribute('color-bg-navbar')
//     if (boxElement.length) {
//         const boxElement1 = boxElement[0]
//         const boxElement2 = boxElement[1]
//         const boxElement3 = boxElement[2]
//         const boxElement4 = boxElement[3]
//         const boxElement5 = boxElement[4]
//         const boxElement6 = boxElement[5]
//         const boxElement7 = boxElement[6]
//         const boxElement8 = boxElement[7]
//         const boxElement9 = boxElement[8]
//         const boxElement10 = boxElement[9]
//         const boxElement11 = boxElement[10]
//         const boxElement12 = boxElement[11]
//         const boxElement13 = boxElement[12]
//         const boxElement14 = boxElement[13]
//         const boxElement15 = boxElement[14]
//         boxElement1.style.backgroundColor = colorAttrNavBar
//         boxElement2.style.backgroundColor = colorAttr
//         boxElement3.style.backgroundColor = colorAttr
//         boxElement4.style.backgroundColor = colorAttr
//         boxElement5.style.backgroundColor = colorAttr
//         boxElement6.style.backgroundColor = colorAttr
//         boxElement7.style.backgroundColor = colorAttr
//         boxElement8.style.backgroundColor = colorAttr
//         boxElement9.style.backgroundColor = colorAttr
//         boxElement10.style.backgroundColor = colorAttr
//         boxElement11.style.backgroundColor = colorAttr
//         boxElement12.style.backgroundColor = colorAttr
//         boxElement13.style.backgroundColor = colorAttr
//         boxElement14.style.backgroundColor = colorAttr
//         boxElement15.style.backgroundColor = colorAttr
// };
// }
// function handleColor(event) {
//     const boxElement = document.getElementsByClassName('color-element1')
//     const colorAttr = event.getAttribute('color-element')
//     if (boxElement.length) {
//         const boxElement1 = boxElement[0]
//         const boxElement2 = boxElement[1]
//         const boxElement3 = boxElement[2]
//         const boxElement4 = boxElement[3]
//         const boxElement5 = boxElement[4]
//         const boxElement6 = boxElement[5]
//         boxElement1.style.color = colorAttr
//         boxElement2.style.color = colorAttr
//         boxElement3.style.color = colorAttr
//         boxElement4.style.color = colorAttr
//         boxElement5.style.color = colorAttr
//         boxElement6.style.color = colorAttr
//     }  
// }

var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  autoPlay: true,
  groupCells: 1,
  wrapAround: true
});



function handleShowDataSkill(){
  let contentHTML = "";
  listSkill.forEach(function(item, index, array){
    contentHTML += `
    <div class="skills-content">
    <span class="icon-skills color-background">
        ${item.icon}
    </span>
    <h3 class="title-skills-content">
        ${item.title}
    </h3>
    <ul class="list-skills">
    
  `
  let strTemp = ""
  item.list.forEach(function(listExpertise, index, array){
    strTemp +=`
    <li class="item-skills">
    ${listExpertise.svg}
    <span>
        ${listExpertise.expertise}
    </span>
   </li>
    `
  })

  contentHTML += strTemp
  contentHTML += `
        </ul>
     </div>
  `  
  })

  const wrapper = document.getElementsByClassName("skills-details")
  if(wrapper.length){
    const element = wrapper[0]
    element.innerHTML = contentHTML
  }
}
handleShowDataSkill(listSkill)

function handleShowDataProject() {
 
  let contentHTML = "";
  listPost.forEach(function (item, index, array) {

    contentHTML += `
    <div class="content-featured">
        <div class="content-featured-img">
           <span class="img-featured">
              <img src=${item.img.image} alt="">
            </span>
            <span class="svg-featured">
                  ${item.img.svg}
            </span>
            <div class="mask-featured color-background">
                   <h3 class="title-mask">
                       ${item.img.mask.title}
                   </h3>
                   <p class="para-mask">
                       ${item.img.mask.para}
                   </p>
            </div>
       </div>
       <div class="content-featured-bottom">
            <h3 class="title-content-bottom">
                <a href="">
                    ${item.details.title}
                </a>
            </h3>
            <ul class="list-language">
      `;

    let strTemp = "";
    item.details.language.forEach(function (language, index, array) {
      strTemp += `<li class="item-language">${language}</li>`;
    });
    contentHTML += strTemp;
    contentHTML += `</ul>
           </div>
        </div>
    `;
  });

  const wrapper = document.getElementsByClassName("wrapper-featured");
  if (wrapper.length) {
    const element = wrapper[0];
    element.innerHTML = contentHTML;
  }
}

handleShowDataProject(listPost);



function handleShowDataBlog(){
  let contentHTML = "";
  listBlog.forEach(function (item, index, array) {

    contentHTML += `
    <div class="posts-content">
                    <div class="img-posts">
                        <img src= ${item.imgPost.img} alt="">
                        <a href="" class="mask-posts">
                            <button class="btn color-background">${item.imgPost.nameBtn}</button>
                        </a>
                    </div>
                    <div class="post-details">
                        <h3 class="title-post">
                            <a href="">
                                ${item.postDetail.titlePost}
                            </a>
                        </h3>
                        <p class="para-post">
                           ${item.postDetail.paraPost}
                        </p>
                    </div>
                </div>
      `;
  
  })

  const wrapper = document.getElementsByClassName("posts-wrapper");
  if (wrapper.length) {
    const element = wrapper[0];
    element.innerHTML = contentHTML;
  }
} 
handleShowDataBlog(listBlog)

function handleShowDataFeatured(){
  let contentHTML = ""
  listFeatured.forEach(function(item,index){
    contentHTML += `
    <a href="">
        <img src=${item.img} alt="">
    </a>
    `
  })
  const wrapper = document.getElementsByClassName("img-featured-in")
  if(wrapper.length){
    const element = wrapper[0]
    element.innerHTML = contentHTML
  }
}
handleShowDataFeatured(listFeatured)





