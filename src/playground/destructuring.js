/*const book ={
    title: 'ego is the enemy',
    auther: 'ryab holiday',
    publisher: {
        name: 'penguin'
    }
};



const {name :publisherName="self"}= book.publisher;


console.log(publisherName);*/



const item= ["coffee(hot)","20rs","50rs","70rs"];
const [itemName,mediumPrice] =item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);