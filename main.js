const subthreadBtn = document.querySelector('.subthreadBtn');
const Delete = document.querySelector('.delete');
// const subthreadContainer = document.querySelectorAll('.subthread-container');
const InterpretBtn = document.querySelector('.interpretBtn');
const ThreadHeader = document.querySelector('.thread-header');
const Threads = document.querySelector('.threads');
const threadBtn = document.querySelector('.thread-btn');
const thread = document.querySelector('.threads');
let threads = document.querySelector('.threadbuilder').innerHTML;
let numb = 1;
const collapseBtn = document.querySelector('.collapse-btn');
subthreadBtn.addEventListener('click', () => {
    numb = numb +1;
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
    subthreadEl.innerHTML +=  subthreadHtml;
    console.log('clicked ', numb);
    InterpretBtn.style.visibility = "visible";
});


document.addEventListener('click', (e) => {
    console.log(e.target.className.includes('chevron-up'));
    if(e.target.className.includes('chevron-up')){
        Threads.classList.toggle('hide');   
             e.target.classList.toggle('rotate');
             console.log(e);
    }
})


InterpretBtn.addEventListener('click', onAddInterpret);
threadBtn.addEventListener('click', () => {
    thread.insertAdjacentHTML('afterend', threads);
})



function onAddInterpret() {
    const subthreadEle = document.querySelector('.sub-thread');
    const InterpretHtml = `
    <div class="interpret">
    <header class="interpret-header">
        <h4>Interpret 1</h4>
    </header>
    <textarea class="interpret-content" placeholder="Enter Text Here"></textarea>
    </div>`;
    subthreadEle.innerHTML +=  InterpretHtml;
    InterpretBtn.style.visibility = "hidden";   
}

function onDelete(ev) {
    numb = numb - 1;
    const subthreadContainer = document.querySelector(`.subthread-container-${ev}`);
    subthreadContainer.remove();
}
