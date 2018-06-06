//控制上方的menu
let selectedHanderItem;

let init = () =>{
    selectedHanderItem = document.getElementsByClassName('selection')[0];
}

let selectHanderItem = (clickedItem) => {
    selectedHanderItem.classList.toggle('selected');
    clickedItem.classList.toggle('selected');
    selectedHanderItem=clickedItem;
}

let selectStarItem = (clickedItem) => {
    console.log(clickedItem);
}