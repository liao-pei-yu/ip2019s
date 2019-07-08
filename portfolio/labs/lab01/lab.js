/*

*/


function start(e) {
    var name = [
    {
        char:'廖',
        BIG5:'B9F9',
        CNS:'1-6861',
        Unicode:'5ED6'
    },
{
    char:'珮',
    BIG5:'AF5C',
    CNS:'1-565F',
    Unicode:'73EE'
},
{
    char:'妤',
    BIG5:'A7B1',
    CNS:'1-4971',
    Unicode:'59A4'
}
];

var ele = document.getElementById('div1'); 

    for (var i = 0; i < 3; i++) {
      ele.innerHTML += name[i].char;
      ele.innerHTML += '    BIG5 = ';
      ele.innerHTML += name[i].BIG5;
      ele.innerHTML += '    CNS = ';
      ele.innerHTML += name[i].CNS;
      ele.innerHTML += '    Unicode = ';
      ele.innerHTML += name[i].Unicode;
      ele.innerHTML += '<br>';
    }
}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
