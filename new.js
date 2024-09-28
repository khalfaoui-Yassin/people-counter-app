// document.getElementById("o").innerText=5
let ab=document.getElementById("o")
console.log(ab)
let sv=document.getElementById("a")
let dl=document.getElementById("a")


let count=0
function incri(){
     count=count+1     //count+=1
    ab.textContent=count
    
    
}
function dec(){
    count=count-1
    ab.textContent=count


}
function save(){
    let countstr=count+" "+"-"
    sv.textContent+=countstr
    ab.textContent=0

    count=0
}
function effacer(){
    let c=0
    dl.textContent=c
   

}
