const phonebook = [
    {
        name: 'shweta',
        mobile: 8208793074
    },
    {
        name: 'shital',
        mobile: 9309382528
    },
    {
        name: 'rahul',
        mobile: 9999978200
    }
]

// const filteredArray = [];

// phonebook.forEach((ContactDetail) => {
//     const {name, mobile} = ContactDetail;

//     if(name.includes('s')){
//         filteredArray.push(ContactDetail)
//     }
// })

// console.log(filteredArray);

const searchTerm = '25';

const filteredArray = phonebook.filter( (ContactDetail) => {
    const name = ContactDetail.name.toLowerCase();
    const mobile = ContactDetail.mobile.toString();
    return (name.includes(searchTerm) || mobile.includes(searchTerm));

  })
  console.log(filteredArray);