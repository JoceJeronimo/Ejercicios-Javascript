console.log("Ejercicio 4"); 


let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
function coursesRep(){
    for (let i = 0; i < student1Courses.length; i++) {
        const courses1= student1Courses[i];
            for (let j = 0; j < student2Courses.length; j++) {
                const courses2 = student2Courses[j];
                if ( courses1 === courses2) {
                //console.log(La materia ${course1} se repite);
                     alert(`El curso que se repite es: [${courses1}]`);
                
                }
            }
    }
}

coursesRep(); 