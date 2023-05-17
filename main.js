Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})

Webcam.attach("webcam")

function capture() {
    Webcam.snap((data_uri) => {
        document.getElementById("snapshot").innerHTML = "<img id ='snapimage' src=" + data_uri + ">"
    })
}

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RmyHwZLEa/model.json", ready)

function ready() {
    console.log("Ready")
}

function predict() {
    ete = document.getElementById("snapimage")
    classifier.classify(ete, gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("sign").innerHTML = result[0].label

        if (result[0].label == "Amazing") {
            document.getElementById("emoji").innerHTML = "&#128076;"
        } else if (result[0].label == "Best") {
            document.getElementById("emoji").innerHTML = "&#128077;"
        } else {
            document.getElementById("emoji").innerHTML = "&#9996;"
        }
    }
}