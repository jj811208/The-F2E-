



let clickedCategoryBlock = document.getElementsByClassName('skill_item_icon__clicked')[0];

const clickCategory = categoryBlock =>{
    clickedCategoryBlock.className='skill_item_icon';
    categoryBlock.className='skill_item_icon__clicked';
    clickedCategoryBlock = categoryBlock;
}

const initThePage = () =>{
    let allItem = document.getElementsByClassName('skill_item_icon');
    allItem = [...allItem];
    allItem.forEach(element => {
        element.onclick = ()=>{clickCategory(element)};
    });
    clickedCategoryBlock.onclick = ()=>{clickCategory(element)};
}