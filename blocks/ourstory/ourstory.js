export default function decorate(block) {
    block.setAttribute("id", "ourstory")
    // loop through all divv containers.
    for (let i = 0; i < block.children.length; i++) {
        let child = block.children[i];
        if ( i == 0 ) {
            child.setAttribute("class", "background");
        } else {
            child.setAttribute("class", "foreground");
        }
    }
}