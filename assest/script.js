let boxs=document.querySelectorAll(".box")
let group=document.querySelectorAll(".group")

function prevent(event){
    event.preventDefault();

}
function dragSart(event){
    let dataId=this.getAttribute("data-id")
    event.dataTransfer.setData("data",dataId)
}
function dragDrop(event){
    let dataBox=event.dataTransfer.getData("data")
    let dataGroup=this.getAttribute("data-id")
    let box = document.querySelector(`.${dataBox}`)
    if(dataBox===dataGroup){
        this.append(box)
    }





      




