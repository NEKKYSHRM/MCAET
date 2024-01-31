let sections = docoment.querySelectorAll("nav");
let navlinks = document.querySelectorAll("header nav");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = windoes.scroll;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAtrribute("id")
        
        
    });
}
