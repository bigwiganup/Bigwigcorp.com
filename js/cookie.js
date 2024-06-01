const cookiebox = document.querySelector(".CookiesBox"),
buttons = document.querySelectorAll(".button");

const executeCodes = () => {

    if(document.cookie.includes("Bigwig")) return;

    cookiebox.classList.add("show");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            cookiebox.classList.remove("show");

            if(button.id == "acceptCookiesBtn"){
                document.cookie = "cookieBy= Bigwig; max-age="+60*60*24*7;
            }
        })
    })
};

window.addEventListener("load", executeCodes);