export default function decorate(block) {
    const myiframe = document.createElement('iframe');
    const buttons = block.getElementsByClassName('button');
    const myhref = buttons[0].href;
    myiframe.setAttribute("src", myhref);
    myiframe.setAttribute("id", "player");
    myiframe.setAttribute("style", "position: relative; inset: 0px 0px 0px -21.222px; width: 1340.44px; height: 754px;");
    myiframe.setAttribute("frameborder", "0");
    myiframe.setAttribute("allowfullscreen", "1'");
    myiframe.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");
    myiframe.setAttribute("title", "PRORASO IN SALT LAKE CITY");
    myiframe.setAttribute("width", "640");
    myiframe.setAttribute("height", "360");
    myiframe.setAttribute("class", "background-video ready");

    block.append(myiframe);
}