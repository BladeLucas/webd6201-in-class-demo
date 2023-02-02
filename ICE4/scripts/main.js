(function () {

    function DisplayButton() {
        let randomButton = document.getElementById("RandomButton")
        randomButton.addEventListener("click", function(){
            location.href = './projects.html'
        })

        let mainContent = document.getElementsByTagName("main")[0]
        //mainContent.setAttribute("class", "container")
        
        //documentBody = document.body

        let mainParagraph = document.createElement("p")
        mainParagraph.setAttribute("id", "MainParagraph")
        mainParagraph.setAttribute("class", "mt-3")

        let firstString = "This is a "
        let secondString = `${ firstString } main paragraph that we added through javascript`
        mainParagraph.textContent = secondString
        
        //mainContent.before(mainParagraph)

        mainContent.appendChild(mainParagraph)

        //document.getElementById("RandomButton").remove()

        // documentBody.innerHTML = `
        //     <div class="container">
        //         <h1 class="display-1">Hello WEBD6201</h1>
        //         <p class="mt-5 lead">and... what do you this of this method?</p>
        //     </div>
        // `

        let blade = new Contact("Blade Lucas", "5873419418", "blade.lucas@dcmail.ca")
        console.log(blade.toString())
    }

    function Start() {
        console.log("App Started!")

        switch (document.title) {
            case "Home - WEBD6201 Demo":
                DisplayButton()
                break;
            case "Projects - WEBD6201 Demo":
                DisplayButton()
                break;
        }
    }

    window.addEventListener("load", Start)
})()