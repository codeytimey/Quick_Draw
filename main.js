random_number=Math.floor((Math.random()*array_1.length)+1);
console.log(array_1[random_number]);
sketch=array_1[random_number];
document.getElementById("drawn_sketch").innerHTML=sketch;
timer_counter=0;
score=0;
timer_check;
drawn_sketch;
answer_holder;

function preload() {
    classifier=ml5.imageClassifier('DoodleNet');
}

function classifyCanvas() {
    classifier.classify(canvas, gotResult);
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    check_sketch();
    if (sketch=drawn_sketch) {
       answer_holder="set";
       score=score+1;
       document.getElementById("score").innerHTML="Score : "+score;
    }
}

function check_sketch(){
    timer_counter=timer_counter+1;
    document.getElementById("timer").innerHTML=timer_counter;
    console.log(timer_counter);
    if (timer_counter>400) {
        timer_counter=0;
        timer_check="completed";
    }

    if (answer_holder="set") {
        timer_check;
        answer_holder;
        updateCanvas();
    }

    if (timer_check="completed") {
        timer_check;
        answer_holder;
        updateCanvas();
    }
}

function updateCanvas() { 
    background("white"); 
    random_number = Math.floor((Math.random() * quick_draw_data_set.length) + 1); 
    console.log(quick_draw_data_set[random_number]); 
    sketch = quick_draw_data_set[random_number]; 
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch; 
}

function setup(){
    canvas=createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        drawn_sketch=results[0].label;
        document.getElementById("confidence").innerHTML="Confidence : "+Math.round(results[0].confidence*100)+"%";
        document.getElementById("ur_sketch").innerHTML="Your Sketch : "+drawn_sketch;
    }
}