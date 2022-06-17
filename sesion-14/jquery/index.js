// $("selector").accion()

// $("h1").hide()
    // selectores:
    // id="el1" => "#el1"
    // class="el1" => ".el1"
    // $("#el1").hide()

$(() => {
    $(".hide").click(() => {
        // $("h1").hide()
        $("h1").fadeOut()
    })
    $(".show").click(() => {
        // $("h1").show()
        $("h1").fadeIn()
    })
    $("#el1").click(() => {
        $("h1").css({ color: "red" })
    })
    $("#el2").click(() => {
        $("h1").css({ color: "green" })
    })
    $("#el3").click(() => {
        $("h1").css({ color: "blue" })
    })
    $(".add-element").click(() => {
        $("ul").prepend("<li>New Element</li>")
    })
    $("li").mouseenter((elem) => {
        elem.target.style.color = "coral"
    })
    $("li").mouseleave((elem) => {
        elem.target.style.color = "grey"
    })
})