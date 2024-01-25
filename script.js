const TaskInput = document.getElementById('TaskInput');
const btn = document.getElementById('btn');
const TaskList =document.getElementById('TaskList');
const AlertBox =document.getElementById('alert-box');
var TaskArr =[];


setTimeout(()=>{
    LoadArr()
    console.log("Loaded");
},1000);

function HandleTask(){
if(TaskInput.value){
TaskArr.push(TaskInput.value)
if(localStorage.getItem("Data")){
    const ParsedArr = JSON.parse(localStorage.getItem("Data"));
    ParsedArr.push(TaskInput.value);
    localStorage.setItem("Data",JSON.stringify(ParsedArr))
} else {
    localStorage.setItem("Data", JSON.stringify(TaskArr))
  }
TaskInput.value="";
LoadArr()

}

}
function LoadArr(){
TaskList.innerHTML ='';
const ParsedArr = JSON.parse(localStorage.getItem("Data"));
ParsedArr.map((elem)=>{
    TaskList.innerHTML +=`<div id='showField'>${elem} <i class="fa-solid fa-pen-to-square" onclick="Edit('${elem}')"></i> <i class="fa-solid fa-trash" style="color:blue;" onclick="Delete('${elem}')"></i><div/>`
})
}

function Delete(data){
    const ParsedArr = JSON.parse(localStorage.getItem("Data"));
    
    const FilterArr = ParsedArr.filter((elem)=>{
        return elem !==data;
    })
    localStorage.setItem("Data",JSON.stringify(FilterArr))
LoadArr();
}

function Edit(data,index){
    const ParsedArr = JSON.parse(localStorage.getItem("Data"))
    const FindArr = ParsedArr.find((elem) => {
      return elem === data;
    })
    const EditVal = prompt('Edit the task ,', FindArr);
  
   if(EditVal !== null){
        ParsedArr.splice(index, 1, EditVal)
   }
    localStorage.setItem("Data", JSON.stringify(ParsedArr))

    LoadArr();
}













btn.addEventListener("click",HandleTask)
