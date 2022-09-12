const subthreadBtn = document.querySelector('.subthreadBtn');
const Delete = document.querySelector('.delete');
// const subthreadContainer = document.querySelectorAll('.subthread-container');
const InterpretBtn = document.querySelector('.interpretBtn');

let numb = 2;

subthreadBtn.addEventListener('click', ()=> {
    // numb = numb +1;
    const subthreadEl = document.querySelector('.sub-thread');
    // const subthreadText = document.querySelectorAll('.subthread-content');
    const subthreadHtml = `
    <div class="subthread-container-${numb}">
    <header class="subthread-header">
        <h4>subthread ${numb}</h4>
        <button onclick="onDelete(${numb})" class="btn-del delete">Delete</button>
    </header>
    <textarea class="subthread-content" placeholder="Enter Text Here" ></textarea>
    </div>
    `;  
    subthreadEl.innerHTML = subthreadEl.innerHTML + subthreadHtml;
    console.log('clicked ', numb);
})

// InterpretBtn.addEventListener('click', onAddInterpret);

// function onAddInterpret() {
//     const subthreadEle = document.querySelector('.sub-thread');
//     const InterpretHtml = `
//     <div class="interpret">
//     <header class="interpret-header">
//         <h4>Interpret 1</h4>
//     </header>
//     <textarea class="interpret-content" placeholder="Enter Text Here"></textarea>
//     </div>`;
//     subthreadEle.innerHtml = subthreadEle.innerHTML + InterpretHtml; 
//     console.log(subthreadEle.innerHtml);
// }

function onDelete(ev) {
    numb = ev;
    const subthreadContainer = document.querySelector(`.subthread-container-${ev}`);
    subthreadContainer.remove();
    console.log(ev);
}
