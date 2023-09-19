export default function init(block) {
    const buttonContainers = block.getElementsByClassName("button");
    const newNode = document.createElement("i");
    newNode.setAttribute("class", "gg-calendar-dates");
    //buttonContainers[0].appendChild(newNode);
    buttonContainers[0].insertBefore(newNode,buttonContainers[0].children[0]);
}
