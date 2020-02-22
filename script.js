console.log('Witam plik podłączony')
const listItems = document.querySelectorAll('.listItem');
const rouletteLine = document.querySelector('.rouletteItemsLine');
listItems.forEach((listItem,i) => {
    listItem.addEventListener("mouseenter",()=>{
        listItem.classList.add("listItemMouseUp");
    })
    listItem.addEventListener("mouseleave",()=>{
        listItem.classList.remove("listItemMouseUp");
    })
})
const allRouletteLine = async () => {
    for(let i = 0; i < 1200; i++){
        rouletteLine.style.left = `-${i}px`;
        if(i%10 === 0){
            await sleep(1)
        }
    }
}

document.querySelector('#startBtn').addEventListener('click',async ()=>{
    await allRouletteLine();
    await allRouletteLine();
    await allRouletteLine();
    const winIteration = parseInt(Math.random()*1200);
    console.log(winIteration)
    for(let i = 0; i < winIteration; i++){
        rouletteLine.style.left = `-${i}px`;
        if(i%2 === 0){
            await sleep(1)
        }
    }
})

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }