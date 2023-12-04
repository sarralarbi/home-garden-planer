let filters = document.getElementsByClassName("filter");

for(let i = 0 ; i < filters.length ; i++){
    filters.item(i).addEventListener("click",()=>{
        filters.item(i).style.backgroundColor = "#70c745";
    })
}