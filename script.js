/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const selection = {
    'one': 0,
    'two': 0,
    'three': 0
};


function onClick(event) {

    const checkAll = event.currentTarget.parentNode.querySelectorAll(".checkbox");
    const checkbox = event.currentTarget.querySelector(".checkbox");
    const targ = event.currentTarget;
    const id= event.currentTarget.dataset.questionId;
    const choice =event.currentTarget.dataset.choiceId;

    for (const ca of checkAll) {
        ca.src="images/unchecked.png";
        ca.classList.remove("selected");
    }

    for (const a of answer) {
        if (a.dataset.questionId === id) {
            if (a.src!="images/checked.png") {
                a.classList.add("unselected");
                a.classList.remove("selected");
            }
        }
    }

    checkbox.src="images/checked.png";
    targ.classList.add("selected");
    targ.classList.remove("unselected");

    selection[id] = choice;
    console.log(selection[id]);

    if (isComplete()===3) {
        for (const a of answer) {
            a.removeEventListener('click', onClick);
            console.log("finito");
        }
        result();
    }
}


function isComplete() {
    let i=0;
    if (selection['one'] !==0)
        i++;
    if (selection['two'] !==0)
        i++;
    if (selection['three'] !==0)
        i++;

    return i;
}


function result() {
    if (selection.one === selection.two || selection.one === selection.three) {
        risultato.classList.remove("hidden");
        const header= document.querySelector("#result h1");
        header.textContent=RESULTS_MAP[selection.one].title;
        const cont=document.querySelector("#contenuto");
        cont.textContent=RESULTS_MAP[selection.one].contents;
    }
    else if (selection.two === selection.three) {
        risultato.classList.remove("hidden");
        const header= document.querySelector("#result h1");
        header.textContent=RESULTS_MAP[selection.two].title;
        const cont=document.querySelector("#contenuto");
        cont.textContent=RESULTS_MAP[selection.two].contents;
    }
    else {
        risultato.classList.remove("hidden");
        const header= document.querySelector("#result h1");
        header.textContent=RESULTS_MAP[selection.one].title;
        const cont=document.querySelector("#contenuto");
        cont.textContent=RESULTS_MAP[selection.one].contents;
    }
}


function onButton(event) {
    for (const a of answer) {
        a.classList.remove("unselected");
        a.classList.remove("selected");
        const chk= a.querySelector(".checkbox");
        chk.src="images/unchecked.png";
        selection.one=0;
        selection.two=0;
        selection.three=0;
        a.addEventListener('click', onClick);
        risultato.classList.add("hidden");        
    }
}


const answer= document.querySelectorAll(".choice-grid div");

const risultato = document.querySelector("#result");

const restart= document.querySelector("#bottone");

for (const a of answer) {
    a.addEventListener('click', onClick);
}

restart.addEventListener('click', onButton);
