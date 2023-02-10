const name = 'John';
const age  = 30;
const job = 'Web 3 Development';
const city = 'California';
let html;

// Without template strings (es5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + ' </li><li>Job: '+ job + ' </li><li>City: '+ city +' </li></ul>';

html = '<ul>'+
        '<li>Name: ' + name + '</li>'+
        '<li>Age: ' + age + '</li>'+
        '<li>Job: ' + job + '</li>'+
        '<li>City: ' + city + '</li>'
        '</ul>';

//with  template strings (es6)
html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>  
    </ul>
`;



document.body.innerHTML = html;
