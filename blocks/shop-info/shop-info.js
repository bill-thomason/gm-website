export default function init(block) {
    // tag the block with id=shop-info
    block.setAttribute("id", "shop-info")
    
    // create a foreground panel to house the foreground elements
    //let foregroundPanel = document.createElement("div");
    //foregroundPanel.setAttribute("class", "foregroundpanel");

    // loop through the children.
    // if first child then set it as background (assumed to be image)
    // all other children after are assumed to be in the foreground - assign foreground class
    for (let i = 0; i < block.children.length; i++) {
        let child = block.children[i];
        if ( i == 0 ) {
            child.setAttribute("class", "background");
        } else {
            child.setAttribute("class", "foreground");
        }
    }
    

}