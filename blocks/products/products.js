export default function init(block) {
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

    var playerButton = document.querySelector('a[title="YouTube video player"]');
    var foregroundContainer = playerButton.parentNode.parentNode;
    var buttonContainer = playerButton.parentNode;
    var playerURL = playerButton.href;
    var player = document.createElement('iframe');
    player.setAttribute("src", playerURL);
    player.setAttribute("id", "player");
    player.setAttribute("style", "position: relative; inset: 0px 0px 0px -21.222px; width: 500px; height: 280px;");
    player.setAttribute("frameborder", "0");
    player.setAttribute("allowfullscreen", "1'");
    player.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;");
    player.setAttribute("title", "PRORASO IN SALT LAKE CITY");
    player.setAttribute("width", "640");
    player.setAttribute("height", "360");
    player.setAttribute("class", "background-video ready");

    foregroundContainer.insertBefore(player, buttonContainer); 
}