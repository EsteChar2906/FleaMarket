export const validate = (data) => {
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*FIRST NAME 
  if (!RegExInputUsersressionText.test(data.firstname)) errors.firstname = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.firstname))   errors.firstname = "Numbers are not allowed";
  if (!data.firstname) errors.firstname = "First name is required";
  if (data.firstname.length < 1) errors.firstname = "The first name must have more than one character";
  if (data.firstname.length > 10) errors.firstname = "The first name must have less than ten characters";
  

  //*LAST NAME 
  if (!RegExInputUsersressionText.test(data.lastname)) errors.lastname = "Numbers and special characters are not allowed"; 
  if (RegExInputUsersressionNum.test(data.lastname)) errors.lastname = "Numbers are not allowed";
  if (!data.lastname) errors.lastname = "Last name is required";
  if (data.lastname.length < 1) errors.lastname = "The last name must have more than one character";
  if (data.lastname.length > 10) errors.lastname = "The last name must have less than ten characters";

  //*USER NAME 
  if (!RegExInputUsersressionText.test(data.username)) errors.username = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.username)) errors.username = "Numbers are not allowed";
  if (!data.username) errors.username = "First name is required";
  if (data.username.length < 1) errors.username = "The first name must have more than one character";
  if (data.username.length > 10) errors.username = "The first name must have less than ten characters";

  //*EMAIL 
  if (!RegExInputUsersressionEmail.test(data.email)) errors.email = "Correctly add Email must include @ and .com...";
  if (!data.email) errors.email = "Email is required";

  //*ADDRES 
  if (!data.addres) errors.addres = "Addres  is required";

  //*COUNTRY 
  if (!RegExInputUsersressionText.test(data.country)) errors.country = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.country)) errors.country = "Numbers are not allowed"
  if (!data.country) errors.country = "country is required";
  if (data.country.length < 1) errors.country = "The country must have more than one character";  
  if (data.country.length > 10) errors.country = "The country must have less than ten characters";
  
  //*CITY 
  if (!RegExInputUsersressionText.test(data.city)) errors.city = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.city)) errors.city = "Numbers are not allowed";
  if (!data.city) errors.city = "City is required";
  if (data.city.length < 1) errors.city = "The City must have more than one character";
  if (data.city.length > 10) errors.city = "The City must have less than ten characters";

  //*TELEPHONE 
  if (!RegExInputUsersressionNum.test(data.telephone)) errors.telephone = "Only numbers are allowed";
  if (!data.telephone) errors.telephone = "Telephone is required";
  
  //*PASSWORD 
  if (!data.password) errors.password = "Password is required";
  if (data.password.length < 5) errors.password = "The pasword must have more than five character";

  return errors;
}

export const Validation = (input) =>{
  let error = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*FIRST NAME 
  if (!RegExInputUsersressionText.test(input.firstName)) error.firstName = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(input.firstName))   error.firstName = "Numbers are not allowed";
  if (!input.firstName) error.firstName = "First name is required";
  if (input.firstName.length < 1) error.firstName = "The first name must have more than one character";
  if (input.firstName.length > 10) error.firstName = "The first name must have less than ten characters";
  

  //*LAST NAME 
  if (!RegExInputUsersressionText.test(input.lastName)) error.lastName = "Numbers and special characters are not allowed"; 
  if (RegExInputUsersressionNum.test(input.lastName)) error.lastName = "Numbers are not allowed";
  if (!input.lastName) error.lastName = "Last name is required";
  if (input.lastName.length < 1) error.lastName = "The last name must have more than one character";
  if (input.lastName.length > 10) error.lastName = "The last name must have less than ten characters";

   //*EMAIL 
  if (!RegExInputUsersressionEmail.test(input.email)) error.email = "Correctly add Email must include @ and .com...";
  if (!input.email) error.email = "Email is required";
  return error;
}; 

export const validateLogin = (data) =>{
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 

   //*EMAIL 
  if (!RegExInputUsersressionEmail.test(data.email)) errors.email = "Correctly add Email must include @ and .com...";
  if (!data.email) errors.email = "Email is required";
 

    //*PASSWORD 
    if (!data.password) errors.password = "Password is required";
    if (data.password.length < 5) errors.password = "The pasword must have more than five character"; 
    
    return errors;
}; 


export const validateCreateProduct = (data) => {
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*TITTLE
  if (!RegExInputUsersressionText.test(data.title)) errors.title = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.title))   errors.title = "Numbers are not allowed";
  if (!data.title) errors.title = "Title name is required";
  if (data.title.length < 1) errors.title = "The title must have more than one character";
  if (data.title.length > 30) errors.title = "The title must have less than 30 characters";
  
   //*PRICE
   if (!RegExInputUsersressionNum.test(data.price)) errors.price = "Only numbers are allowed";
   if (!data.price) errors.price = "price is required";
   
  /*  if(!RegExInputUsersressionUrl.test(data.image)){
    errors.image = 'Add image URL'
   } */
   //*rating
   if (!RegExInputUsersressionNum.test(data.rating)) errors.rating = "Only numbers are allowed";
   if (!data.rating) errors.rating = "rating is required";
   if(data.rating < 1 ) errors.rating = 'Must be greater than 0'
   if(data.rating> 10 ) errors.rating = 'Must be less than 10' 

   //*stock
   if (!RegExInputUsersressionNum.test(data.stock)) errors.stock = "Only numbers are allowed";
   if (!data.stock) errors.stock = "Stock is required";

    //*brand
  if (!RegExInputUsersressionText.test(data.brand)) errors.brand = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(data.brand))   errors.brand = "Numbers are not allowed";
  if (!data.brand) errors.brand = "Brand is required";
  if (data.brand.length < 1) errors.brand = "The brand must have more than one character";
  if (data.brand.length > 15) errors.brand = "The brand must have less than 15 characters";
  
  //*ram 
  if (!data.ram) errors.ram = "Ram is required";
  if (data.ram.length > 8) errors.ram = "The Ram must have less than 8 characters";
  
  //*processor 
  if (!data.processor) errors.processor = "Processor is required";
  if (data.processor.length > 8) errors.processor = "The processor must have less than 8 characters";
  
  //*Battery 
  if (!data.battery) errors.battery = "Battery is required";
  if (data.battery.length > 15) errors.battery = "The battery  must have less than 15 characters";
  
  //*Battery 
  if (!data.description) errors.description = "Description is required";
  if (data.description.length >  200) errors.description = "The description  must have less than 200 characters";
  
  return errors;
}



 
export const validateUpdateProduct = (dataEdit) => {
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*TITTLE
  if (!RegExInputUsersressionText.test(dataEdit.title)) errors.title = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(dataEdit.title))   errors.title = "Numbers are not allowed";
  if (!dataEdit.title) errors.title = "Title name is required";
  if (dataEdit.title.length < 1) errors.title = "The title must have more than one character";
  if (dataEdit.title.length > 30) errors.title = "The title must have less than 30 characters";

   //*condition
    if (!RegExInputUsersressionText.test(dataEdit.condition)) errors.condition = "Numbers and special characters are not allowed";
    if (RegExInputUsersressionNum.test(dataEdit.condition))   errors.condition = "Numbers are not allowed";
    if (!dataEdit.condition) errors.condition = "Condition name is required";
    if (dataEdit.condition.length < 1) errors.condition = "The condition must have more than one character";
    if (dataEdit.condition.length > 10) errors.condition = "The condition must have less than 10 characters";

    //*image
  /*if(!RegExInputUsersressionUrl.test(dataEdit.image))errors.image = 'Add image URL' */

     //*bluetooth
     if (!RegExInputUsersressionText.test(dataEdit.bluetooth)) errors.bluetooth = "Numbers and special characters are not allowed";
     if (RegExInputUsersressionNum.test(dataEdit.bluetooth))   errors.bluetooth = "Numbers are not allowed";
     if (!dataEdit.bluetooth) errors.bluetooth = "bluetooth name is required";
     if (dataEdit.bluetooth.length < 1) errors.bluetooth = "The bluetooth must have more than one character";
     if (dataEdit.bluetooth.length > 10) errors.bluetooth = "The bluetooth must have less than 10 characters";  

 //*PRICE
  if (!RegExInputUsersressionNum.test(dataEdit.price)) errors.price = "Only numbers are allowed";
  if (!dataEdit.price) errors.price = "price is required";
 
  //*rating
  if (!RegExInputUsersressionNum.test(dataEdit.rating)) errors.rating = "Only numbers are allowed";
  if (!dataEdit.rating) errors.rating = "rating is required";
  if(dataEdit.rating < 1 ) errors.rating = 'Must be greater than 0'
  if(dataEdit.rating > 10 ) errors.rating = 'Must be less than 10' 

  //*stock
  if (!RegExInputUsersressionNum.test(dataEdit.stock)) errors.stock = "Only numbers are allowed";
  if (!dataEdit.stock) errors.stock = "Stock is required";

   //*brand
 if (!RegExInputUsersressionText.test(dataEdit.brand)) errors.brand = "Numbers and special characters are not allowed";
 if (RegExInputUsersressionNum.test(dataEdit.brand))   errors.brand = "Numbers are not allowed";
 if (!dataEdit.brand) errors.brand = "Brand is required";
 if (dataEdit.brand.length < 1) errors.brand = "The brand must have more than one character";
 if (dataEdit.brand.length > 15) errors.brand = "The brand must have less than 15 characters";
   /*  
 //*ram 
  if (dataEdit.ram.length < 1) errors.ram = "The condition must have more than one character";
    if (dataEdit.ram.length > 10) errors.ram = "The condition must have less than 10 characters";

 //*processor 
 if (!dataEdit.processor) errors.processor = "Processor is required";
 if (dataEdit.processor.length > 8) errors.processor = "The processor must have less than 8 characters"; 

 //*Battery 
 if (!dataEdit.battery) errors.battery = "Battery is required";
 if (dataEdit.battery.length > 15) errors.battery = "The battery  must have less than 15 characters"; 
  */
 //*description
 if (!dataEdit.description) errors.description = "Description is required";
 if (dataEdit.description.length >  200) errors.description = "The description  must have less than 200 characters";
 
 
  return errors;
}



export const validateProfileUpdate = (changes) => {
  let errors = {};
  let RegExInputUsersressionUrl =
    /^httInputUserss?:\/\/(?:www.)?[-a-zA-Z0-9@:%.+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%+.~#?&/=]*)$/;
  let RegExInputUsersressionText = /^[a-zA-Z\s]*$/;
  let RegExInputUsersressionNum = /^[0-9,$]*$/;
  let RegExInputUsersressionEmail =
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  //*FIRST NAME 
  if (!RegExInputUsersressionText.test(changes.firstname)) errors.firstname = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(changes.firstname))   errors.firstname = "Numbers are not allowed";
  if (!changes.firstname) errors.firstname = "First name is required";
  if (changes.firstname.length < 1) errors.firstname = "The first name must have more than one character";
  if (changes.firstname.length > 10) errors.firstname = "The first name must have less than ten characters";
  
/* 
  //*LAST NAME 
  if (!RegExInputUsersressionText.test(changes.lastname)) errors.lastname = "Numbers and special characters are not allowed"; 
  if (RegExInputUsersressionNum.test(changes.lastname)) errors.lastname = "Numbers are not allowed";
  if (!changes.lastname) errors.lastname = "Last name is required";
  if (changes.lastname.length < 1) errors.lastname = "The last name must have more than one character";
  if (changes.lastname.length > 10) errors.lastname = "The last name must have less than ten characters";

  //*USER NAME 
  if (!RegExInputUsersressionText.test(changes.username)) errors.username = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(changes.username)) errors.username = "Numbers are not allowed";
  if (!changes.username) errors.username = "First name is required";
  if (changes.username.length < 1) errors.username = "The first name must have more than one character";
  if (changes.username.length > 10) errors.username = "The first name must have less than ten characters";

  //*EMAIL 
  if (!RegExInputUsersressionEmail.test(changes.email)) errors.email = "Correctly add Email must include @ and .com...";
  if (!changes.email) errors.email = "Email is required";

  //*ADDRES 
  if (!changes.addres) errors.addres = "Addres  is required";

  //*COUNTRY 
  if (!RegExInputUsersressionText.test(changes.country)) errors.country = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(changes.country)) errors.country = "Numbers are not allowed"
  if (!changes.country) errors.country = "country is required";
  if (changes.country.length < 1) errors.country = "The country must have more than one character";  
  if (changes.country.length > 10) errors.country = "The country must have less than ten characters";
  
  //*CITY 
  if (!RegExInputUsersressionText.test(changes.city)) errors.city = "Numbers and special characters are not allowed";
  if (RegExInputUsersressionNum.test(changes.city)) errors.city = "Numbers are not allowed";
  if (!changes.city) errors.city = "City is required";
  if (changes.city.length < 1) errors.city = "The City must have more than one character";
  if (changes.city.length > 10) errors.city = "The City must have less than ten characters";

  //*TELEPHONE 
  if (!RegExInputUsersressionNum.test(changes.telephone)) errors.telephone = "Only numbers are allowed";
  if (!changes.telephone) errors.telephone = "Telephone is required";
  
  //*PASSWORD 
  if (!changes.password) errors.password = "Password is required";
  if (changes.password.length < 5) errors.password = "The pasword must have more than five character"; */

  return errors;
}