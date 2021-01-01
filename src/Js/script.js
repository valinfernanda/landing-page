function getDomAll(selector, type) {
    if(type === 'all') {
        return document.querySelectorAll(selector);
    } else {
        return document.querySelector(selector);
    }
}



const getActiveClass = getDomAll('.navAction', 'all'); 

getActiveClass.forEach((value) => {
    value.addEventListener('click', () => {
        const activeNav = getDomAll('.navBar a.active');
        if (activeNav !== null) {
            activeNav.classList.remove('active');
        }
        value.classList.add('active');
    })
})


const imageHero = getDomAll('#image');

imageHero.addEventListener('click', () => {
    if (imageHero.getAttributeNode('src').value === '../Assets/Images/smile.jpg') {
        imageHero.getAttributeNode('src').value = '../Assets/Images/casual.jpg';
    } else {
        imageHero.getAttributeNode('src').value = '../Assets/Images/smile.jpg';
    }
})

// const navBarElement = document.querySelectorAll('.navAction');

// navBarElement.forEach(function(value, index){ 
//         value.addEventListener('click', function () { 
//             console.log(navBarElement[index]);
//             navBarElement[index].classList.add("active");
//             const current = document.querySelector(".active");
//     });
// });



// function jumlah = (value1, value2){
//     if (typeof value1 || value !== 'number'){
//         alert('hanya boleh input angka');
//     } else { 
//         return value1 + value2; 
//     }
// }

// jumlah("hshs", "hejekj");