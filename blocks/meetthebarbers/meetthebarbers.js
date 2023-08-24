export default function init(block){
    block.setAttribute("id","meetthebarbers");
    for (let i = 0; i < block.children.length; i++) {
        let child = block.children[i];
        child.setAttribute("class","portrait");
        let portrait = child;
        portrait.children[0].setAttribute("class","face");
        portrait.children[1].setAttribute("class","name");
    }
}