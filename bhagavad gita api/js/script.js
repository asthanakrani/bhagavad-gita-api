let chp = document.getElementById('shlok');
let sl = document.getElementById('sl')
// let count = 0;

const bhagavad = () => {
    fetch('https://vedicscriptures.github.io/chapters').then((res)=>{
        return res.json();
    }).then((data)=>{
        console.log("data",data);

        data.forEach(element => {
            chp.innerHTML += `<li class="hover p-2" onclick="return printSlock(${element.chapter_number} , ${element.verses_count})"> ${element.name}</li>`
        });
    }).catch((err)=>{
        console.log("err", err);
    }) 
}
bhagavad();
const printSlock = (chp_num , ver_count) => {
    // conut ++;
    // let temp = 1;
    console.log("chp_num",chp_num ,"ver_count",ver_count);
    
    for (let x = 1; x < ver_count; x++) { //1  1 <46
        sl.innerHTML =  " ";
        fetch(`https://vedicscriptures.github.io/slok/${chp_num}/${x}/`).then((res)=>{ // 1/3
            return res.json();
        }).then((data)=>{
            console.log("data",data.slok);
            sl.innerHTML += data.slok + "<br></br>";
        }).catch((err)=>{
            console.log("err", err);
        })
        
    }
}