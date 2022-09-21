const subthreadBtn = document.querySelector('.subthreadBtn');
const Delete = document.querySelector('.delete');
const InterpretBtn = document.querySelector('.interpretBtn');
const ThreadHeader = document.querySelector('.thread-header');
const Threads = document.querySelector('.threads');
const threadBtn = document.querySelector('.thread-btn');
const thread = document.querySelector('.threads');
let threadbuild = document.querySelector('.threadbuilder')
const SwipeBtn = document.querySelectorAll('.touch-icon');
const slider = document.querySelector('.slider');
const Tabs = document.querySelector('.tabs');
const threadContainer = document.querySelector('.thread-container');
const eagleContainer = document.querySelector('.eagle-container');

let isClicked;
let numb = 1;
let count = 1;
let i = 1;

const collapseBtn = document.querySelector('.collapse-btn');
subthreadBtn.addEventListener('click', () => {
    numb = numb +1;
    const subthreadEl = document.querySelector('.sub-thread');
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

SwipeBtn.forEach(e => {
    e.addEventListener('click', () => {
        slider.classList.toggle('slide')
    });
})


document.addEventListener('click', (e) => {
    if(e.target.className.includes('chevron-up')){  
            e.target.classList.toggle('rotate');
    }
})

collapseBtn.addEventListener('click', () => {
    Threads.classList.toggle('hide');
})

Tabs.addEventListener('click', (e) =>{
    const currentTab = document.querySelectorAll('.active');
    currentTab.forEach((ev) => {
        ev.classList.toggle('active');
    })
    e.target.classList.toggle('active')
    if(e.target.className.includes('threadbuilderBtn')){
        threadContainer.classList.toggle('hide');
        eagleContainer.classList.toggle('hide');
    } else if (e.target.className.includes('eaglebuilder')){
        eagleContainer.classList.toggle('hide');
        threadContainer.classList.toggle('hide');
    }
})



InterpretBtn.addEventListener('click', onAddInterpret);
threadBtn.addEventListener('click', () => {
    count = count + 1;
    alphabets = ['A','B','C','D','E','F','G','H','I'];
    const threads = `<div class="thread-container-${count} ">
    <header class="thread-header mar-b-1">
        <div class="flex">
        <button  onclick="onCollapse(${count})" class="collapse-btn"><i class="fa-solid fa-chevron-up"></i></button>
        <h3>Thread ${alphabets[i]}</h3>
        </div>
    </header>
    <div class="threads thread-${count} ">
    <div class="sub-thread mar-b-1">
        <div class="subthread-container-${alphabets[count] + count}">
            <header class="subthread-header">
                <h4>subthread 1</h4>
                <button onclick="onDelete('${alphabets[count] + count}')" class="btn-del delete">Delete</button>
            </header>
            <textarea class="subthread-content" placeholder="Enter Text Here"></textarea>
        </div>
        <div class="subs"></div>
    </div>
    <div class="options mar-b-1">
        <button class="btn-sm interpretBtn">+ Interpret</button>
        <div class="rigor"><button class="btn-sm rigor-btn">+ </button><span class="rigor-text">Rigor</span></div>
        <button class="btn-sm subthreadBtn">+ Sub thread</button>
    </div>
    <div class="summary-thread mar-b-1">
        <header class="summary-header">
            <h4>summary for thread A</h4>
        </header>
        <textarea class="summary-content" placeholder="Enter Text Here"></textarea>
    </div>
    <div class="thread-end">
        <div>
            <p class=" mar-lr-1">thread Credit</p>
            <button class="btn-round">+</button>
            <span>Srivalli</span>
        </div>
        <select class="drop-down" value="speakers emotion">
            <option name="" id="">Select category</option>
            <option name="" id="">option</option>
            <option name="" id="">options</option>
        </select>
    </div>
</div>
</div>`
    threadbuild.insertAdjacentHTML('beforeend', threads);
    // thread.innerHTML +=  threads;
    i++;
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

function onCollapse(ev) {
    const collapse = document.querySelector(`.thread-${ev}`);
    collapse.classList.toggle('hide');
}
// moddify

