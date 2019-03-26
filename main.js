const students = [];
const houses = [
'Slytherin', 
'Ravenclaw', 
'Gryffindor', 
'Hufflepuff',
];

const expelledStudents = [];
const inputIngredient = document.getElementById('inputIngredient');

const hideInputForm = () => {
document.getElementById('hiddenInput').style.display = 'none';
};


const showInputForm = () => {
document.getElementById('hiddenInput').style.display = 'block';
};

const printToDom = (divId, textToPrint) => {
    const selectDiv= document.getElementById(divId);
    selectDiv.innerHTML =textToPrint;
}

const cardBuilder = () => {
    let domString = '';
students.forEach(student => {
    domstring += `<div class="card">`
    domstring += `<div class="name">${student.name}</div>`
    domstring += `<div class="house">${student.house}</div>`
    domstring += `<button class="btn">Expel</button>`
    domstring += `</div>`
});
printToDom('sortedStudents', domString);
}

const domStringBuilder = (arrayToPrint) => {
    let domString = '';
    students.forEach((student) => {
        domString += `<div class="card col-3 mt-1 mb-2">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title">${student.name}</h5>`;
        domString += `<h5 class="card-title">${student.house}</h5>`;
        domString += `<a href="#" class="btn btn-primary">Expel</a>`;
        domString += `</div>`;
        domString += `</div>`;
    });
   printToDom('sortedStudents',domString);
}

const addStudent = (e) => {
    e.preventDefault();
   const inputName = document.getElementById('inputName').value;
   const newName = {
       name: inputName,
   };
   students.push(newName);

domStringBuilder(students);
inputName.value='';
};


const eventListener = () => {
    document.getElementById('startSorting').addEventListener('click', showInputForm);
    document.getElementById('sortBtn').addEventListener('click', addStudent);

  };
  

const init = () => {
    hideInputForm();
    eventListener();

}

init();