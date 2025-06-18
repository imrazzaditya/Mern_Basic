 //console.log("Window Object:", window);
// console.dir(document); // to see the properties of document object
// console.dir(document.children[0]); 


//1.document.getElement_s_BytagName-->[] (iterable) (HTML Collection)

const headings = document.getElementsByTagName("h3");
console.log("headings: ", headings);

const header = document.getElementsByTagName("header");
console.log("header: ", header);

headings[0].innerText = "Hello World";
headings[1].innerText = "Hello Adi";


