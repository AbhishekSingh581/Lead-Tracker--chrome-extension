const inputEl=document.getElementById("input-el")

let myLeads=[]
const inputBtn=document.getElementById("input-btn")
ulEl=document.getElementById("unorderedListLeads") 
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=null;
    renderLeads();
})
function renderLeads(){
    let listItems=""
    for(let i = 0; i < myLeads.length; i++) {
        // listItems+="<li><a href='"+myLeads[i]+"' target='_blank'>"+myLeads[i]+"</a></li>"
        listItems+=`<li>
                        <a href=${myLeads[i]} target='_blank'>
                        ${myLeads[i]}
                        </a>
                    </li>`

        //or

        //create element 
        //set text content
        // append

        // const li=document.createElement("li")
        // li.textContent=myLeads[i]
        // leadsList.append(li)
    }
    ulEl.innerHTML=listItems
}
