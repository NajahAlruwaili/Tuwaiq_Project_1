const  imgsDiv = $("#imgs");
const  cupsDiv = $("#cups");
const  tshirtDiv = $("#tshirt");
const  pantDiv = $("#pant");
const  pinsDiv = $("#pins");
const nameInput = $("#imgName")
const priceInput = $("#price")
const imgInput = $("#imgURL")



$(document).ready(function(){
    $('#signIn').show()
    $('#imgs').hide()
    $('#signUp').hide()

    $('#sn').click(function(){
        $('#signIn').hide()
        $('#signUp').hide()

        $('#imgs').show()
        
    })

    $('#suu').click(function(){
        $('#signIn').hide();
        $('#imgs').hide()

        $('#signUp').show()

     })
     $('#home').click(function(){
        $('#imgs').hide()
        $('#signUp').hide()

        $('#signIn').show()
        
    })
    $('#su').click(function(){
        $('#signIn').hide();
        $('#signUp').hide()

        $('#imgs').show()

     })
    
});


 let cupsArr = [
    { imgName: "cup1" , price: "RS(67)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXB38K_yHfSnvgkS0lnlOiZWZiskqmPS49HA&usqp=CAU" },
    { imgName: "cup2", price: "RS(78)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPr7ueeWDUYs6M-K4l2L5mgr59ZQNUjGnyjA&usqp=CAU"},
    { imgName: "cup3" , price: "RS(39)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfCmo7odbbkUl1pPaojEXiseXyi9xHa0XVEg&usqp=CAU"} ,
 ]
 
 let pantArr = [
    { imgName: "pant1" , price: "RS(1995)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiXf7l99IiJOqyZYcr5TL8AFcRXwDj3eKPqtNQoowjfeAnisvGkC5_29SP_qKZoyUluuQ&usqp=CAU" },
    { imgName: "pant2" , price: "RS(2894)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV-s8D5a-abKFUpRBs1bKI1DTcVQAhadMacvuoG28JgFGIjjk-C5cOGz5zDYIH3YDC9JI&usqp=CAU" },
    { imgName: "pant3" , price:"RS(8433)" , img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0aLOKfYqifPdW6Oxd-rcksujZ5pY0xRij1g&usqp=CAU" },
 ]
 let pinsArr = [
    { imgName: "pins1" , price: "RS(27)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUVgCA2tQX1knb2V8JTiqoVy8l_5qpjMBcQ&usqp=CAU" },
    { imgName: "pins2" , price: "RS(38)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mVXi106I-axwhRzrnyEezqXYCiSYoXbxdlxrWGZJNvISdBTh2Js0UyuOuTirPfhGqKk&usqp=CAU" },
    { imgName: "pins3" , price: "RS(21)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTurmczG5L4m4huzB8uDE3XXxK5iz4xmDVmttZzrVMM36GpOiQGqeYrfM5aI9qi2BrtZEU&usqp=CAU" },
 ]
 let tshirtArr = [

    { imgName: "tshirt1" , price: "RS(178)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDxY0JHGkH9JgvaQfMDZggf8dUiw7Gccg2SYoAi5a9ZY0j7yXvFFAqiZ-JmTjVQha5ris&usqp=CAU" },
    { imgName: "tshirt2" , price: "RS(198)", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwDtxzHE0evLXG8QmuMcVJU_X62r7AE5yVGRwNyv-mGz5PFBKqb7myJJzrRI7P6gH4n4&usqp=CAU" },
    { imgName: "tshirt3" , price: "RS(165)", img: "https://cdn.shopify.com/s/files/1/0752/4221/products/Boo_Product3_600x.jpg?v=1479803903" },
 ]
 
/* <button id="delet" onclick="remove(${i})">delet</button> */
 function renderArr(Array,div ) {
    for (let i = 0; i <Array.length; i++) {
      const  a = `<a>
          <img id="pant1"height="200" width="200" src=${Array[i].img} alt="picture" >
          <button id="delet" onclick="remove(${i})">delet</button>
          <p>${Array[i].imgName}</p> 
          <p>${Array[i].price}</p> 
          
      </a>`
       
      div.append(a);
    }
  }
  
 renderArr (cupsArr, cupsDiv)

 renderArr (pantArr,pantDiv )

 renderArr (pinsArr, pinsDiv)

 renderArr (tshirtArr,tshirtDiv )

 function add() {
    
    const newAdd = {
      imgName: nameInput.val(),
      price: priceInput.val(),
      img: imgInput.val(),
    };
    cupsArr.push(newAdd);
 renderArr([newAdd], cupsDiv);
}

// function delet (e){
//     newAdd.splice(e,1);
//     div.html("imgs")
//     renderArr([newAdd],cupsDiv);
// }



function remove(i) {

    cupsArr.splice(i,1)
    cupsDiv.html("")
 renderArr(cupsArr,cupsDiv )
}

