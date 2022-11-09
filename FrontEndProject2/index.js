
const progress = document.getElementById('progress')
const prev = document.getElementById("prev")
const next = document.getElementById("next")
const circles = document.querySelectorAll(".circle")

let ActiveCount = 1;


next.addEventListener('click', ()=> {
    ActiveCount++
    if(ActiveCount > circles.length)
    {
        ActiveCount = circles.length;
    }
    Update()
})

prev.addEventListener('click', () => {
    ActiveCount--
if(ActiveCount < 1)
{
    ActiveCount = 1;
}
Update()
})


function Update(){
        circles.forEach((circ,ids) => {
            if(ids < ActiveCount)
            {
            circ.classList.add('active')
            }
            else {
                circ.classList.remove('active')
            }

            const actives = document.querySelectorAll(".active")
           progress.style.width =( actives.length -1)  / (circles.length-1) * 100 + '%'

            if(ActiveCount === 1)
            {
                prev.disabled = true;
            }
            else if(ActiveCount === circles.length)
            {
                next.disabled = true;
            }
            else
            {
                prev.disabled = false;
                next.disabled = false;
            }
        })
}