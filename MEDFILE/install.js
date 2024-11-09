let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    
    let installButton = document.createElement("button");
    installButton.innerText = "Installer le raccourci";
    installButton.classList.add("install-btn");
    document.body.appendChild(installButton);

    installButton.addEventListener("click", () => {
        installButton.style.display = "none";
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            deferredPrompt = null;
        });
    });
});