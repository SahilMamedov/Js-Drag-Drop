let boxs=document.querySelectorAll(".box")
let group=document.querySelectorAll(".group")

function prevent(event){
    event.preventDefault();

}
function dragSart(event){
    let dataId=this.getAttribute("data-id")
    event.dataTransfer.setData("data",dataId)
}





      




