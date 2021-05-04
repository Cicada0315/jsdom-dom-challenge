function _toConsumableArray(a) {
    if (Array.isArray(a)) {
        for (var b = 0, c = Array(a.length); b < a.length; b++)
            c[b] = a[b];
        return c
    }
    return Array.from(a)
}
let playing = true;
let timer = function() {
    return setInterval(function() {
        var a = document.getElementById("counter")
          , b = parseInt(a.innerText);
        a.innerText = b + 1
    }, 1e3)
} 
let interval = timer()

//for the pause function
const pause=document.getElementById('pause');
pause.addEventListener("click", function(e){
    if (playing){
        playing=false;
        clearInterval(interval);
        this.innerText='resume';
    }else{
        playing=true;
        interval=timer();
        this.innerText='pause';
    }
    //not really understood
    [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a) {
        "pause" !== a.id && (a.disabled = !playing)
    });
});

//for the minus function
const minus=document.getElementById('minus');
minus.addEventListener("click", function(e){
    const counter=document.getElementById('counter');
    const counter_int=parseInt(counter.innerText);
    counter.innerText=counter_int-1;
});
//for the plus function
const plus=document.getElementById('plus');
plus.addEventListener("click", function(e){
    const counter=document.getElementById('counter');
    const counter_int=parseInt(counter.innerText);
    counter.innerText=counter_int+1;
});

//for heart function
//try to understand this
const heart = document.getElementById("heart")
heart.addEventListener("click", function() {
    var a = document.getElementById("counter")
      , b = parseInt(a.innerText)
      , c = document.querySelector(".likes")
      , d = void 0;
    if ([].concat(_toConsumableArray(c.children)).map(function(a) {
        return parseInt(a.dataset.num)
    }).includes(b)) {
        d = document.querySelector('[data-num="' + b + '"]');
        var e = parseInt(d.children[0].innerText);
        d.innerHTML = b + " has been liked <span>" + (e + 1) + "</span> times"
    } else
        (d = document.createElement("li")).setAttribute("data-num", b),
        d.innerHTML = b + " has been liked <span>1</span> time",
        c.appendChild(d)
})

//for the comment
//if it's form then you have to put e.preventDefault();
const comment_form=document.getElementById('comment-form');
comment_form.addEventListener("submit", function(e){
    let comment=document.getElementById('comment-input').value;
    let list=document.getElementById('list');
    list.innerHTML+=`<p>${comment}<p>`;
    e.preventDefault();
});

