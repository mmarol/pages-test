let friedegg;
let waffle;
let mcmuffin;
let bacon;
let matcha;
let acaibowl;
let avocado;
let salapao;
let platonggo;
let sushi;
let hashbrown;
let tomato;

let plate1;
let plate2;
let plate3;
let plate4;
let none;

let buttonColor = "white";
let d = 1;
let p = 1;
let scaleSlider;
let scale = 50;
let button;
let colorpicker;
let button2;
let notepad;
let font;

function preload() {
	friedegg = loadImage("./images/fried egg.png");
	waffle = loadImage("./images/images/waffle.png");
	mcmuffin = loadImage("./images/mcmuffin.png");
	bacon = loadImage("./images/bacon.png");
	matcha = loadImage("./images/matcha.png");
	acaibowl = loadImage("./images/acaibowl.png");
	avocado = loadImage("./images/avocado.png");
	salapao = loadImage("./images/salapao.png");
	platonggo = loadImage("./images/platonggo.png");
	sushi = loadImage("./images/sushi.png");
	hashbrown = loadImage("./images/hashbrown.png");
	tomato = loadImage("./images/tomato.png");

	plate1 = loadImage("./images/plate.png");
	plate2 = loadImage("./images/plate2.png");
	plate3 = loadImage("./images/plate3.png");
	plate4 = loadImage("./images/plate4.png");
	none = loadImage("./images/none.png");
	notepad = loadImage("./images/notepad.jpeg");
	font = loadFont("./images/Autography.otf");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	imageMode(CENTER);

	scaleSlider = createSlider(10, 500, 200, 10); //min,max,start,increment
	scaleSlider.position(60, 475);
	scaleSlider.addClass("Slider");

	button = createButton("new plate!");
	button.position(width - 190, 432);
	button.size(130, 40);
	button.mousePressed(newplate);
	button.addClass("Button");

	image(plate1, width / 2, height / 2, height, height);
}

function draw() {
	scale = scaleSlider.value();

	console.log(d);

	//box
	push();
	strokeWeight(1);
	//noFill();
	//fill('white');
	image(notepad, 127.5, 270, 195, 480);
	//rect(30,30,195,480);
	image(notepad, width - 127.5, 270, 195, 480);
	//rect(width-225,30,195,480)
	pop();

	//text
	textFont(font);
	fill(0);
	textSize(30);
	textAlign(CENTER);
	text("plating", width - 130, 60);
	text("menu", 125, 60);
	text("serving size", 125, 458);

	//breakfast icons
	image(friedegg, 90, 100, 50, 50);
	image(waffle, 90, 160, 50, 50);
	image(bacon, 160, 100, 50, 50);
	image(matcha, 160, 160, 50, 50);
	image(acaibowl, 90, 160 + 60, 50, 50);
	image(mcmuffin, 160, 160 + 60, 50, 50);
	image(avocado, 90, 160 + 120, 50, 50);
	image(salapao, 160, 160 + 120, 60, 60);
	image(platonggo, 90, 160 + 120 + 60, 70, 70);
	image(sushi, 160, 160 + 120 + 60, 50, 50);
	image(hashbrown, 90, 160 + 120 + 120, 40, 40);
	image(tomato, 160, 160 + 120 + 120, 45, 45);

	//fried egg icon hover
	if (mouseX > 65 && mouseX < 65 + 50 && mouseY > 75 && mouseY < 75 + 50) {
		image(friedegg, 90, 100, 60, 60);
	}

	//waffle icon hover
	if (mouseX > 65 && mouseX < 110 && mouseY > 135 && mouseY < 135 + 50) {
		image(waffle, 90, 160, 60, 60);
	}

	//bacon icon hover
	if (mouseX > 135 && mouseX < 135 + 50 && mouseY > 75 && mouseY < 75 + 50) {
		image(bacon, 160, 100, 60, 60);
	}

	//matcha icon hover
	if (mouseX > 135 && mouseX < 135 + 50 && mouseY > 135 && mouseY < 135 + 50) {
		image(matcha, 160, 160, 60, 60);
	}

	//acaibowl hover
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 &&
		mouseY < 135 + 50 + 60
	) {
		image(acaibowl, 90, 160 + 60, 60, 60);
	}

	//mcmuffin hover
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 &&
		mouseY < 135 + 50 + 60
	) {
		image(mcmuffin, 160, 160 + 60, 60, 60);
	}

	//avocado hover
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60
	) {
		image(avocado, 90, 160 + 120, 60, 60);
	}

	//salapao hover
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60
	) {
		image(salapao, 160, 160 + 120, 70, 70);
	}

	//platonggo hover
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60
	) {
		image(platonggo, 90, 160 + 120 + 60, 90, 90);
	}

	//sushi hover
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60
	) {
		image(sushi, 160, 160 + 120 + 60, 60, 60);
	}

	//hashbrown hover
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60 + 60
	) {
		image(hashbrown, 90, 160 + 120 + 120, 50, 50);
	}

	//tomato hover
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60 + 60
	) {
		image(tomato, 160, 160 + 120 + 120, 60, 60);
	}

	//plate selection
	push();
	noFill();
	noStroke();

	//plate1
	circle(width - 130, 110, 50, 50);
	image(plate1, width - 130, 110, 50, 50);

	//plate2
	circle(width - 130, 180, 50, 50);
	image(plate2, width - 130, 180, 50, 50);

	//plate3
	circle(width - 130, 250, 50, 50);
	image(plate3, width - 130, 250, 50, 50);

	//plate4
	circle(width - 130, 320, 50, 50);
	image(plate4, width - 130, 320, 50, 50);

	//none
	circle(width - 130, 390, 50, 50);
	image(none, width - 130, 390, 40, 40);

	pop();

	push();
	//plate1 hover
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 85 &&
		mouseY < 135
	) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 110, 50, 50);
	}

	if (p == 1) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 110, 50, 50);
	}

	//plate2 hover
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 180 - 25 &&
		mouseY < 180 + 25
	) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 180, 50, 50);
	}

	if (p == 2) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 180, 50, 50);
	}

	//plate3 hover
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 250 - 25 &&
		mouseY < 250 + 25
	) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 250, 50, 50);
	}

	if (p == 3) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 250, 50, 50);
	}

	//plate4 hover
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 320 - 25 &&
		mouseY < 320 + 25
	) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 320, 50, 50);
	}

	if (p == 4) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 320, 50, 50);
	}

	//plate5 hover / none
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 390 - 25 &&
		mouseY < 390 + 25
	) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 390, 50, 50);
	}

	if (p == 5) {
		noFill();
		stroke("#F44336");
		strokeWeight(4);
		circle(width - 130, 390, 50, 50);
	}
	pop();
}

function mousePressed() {
	//click on fried egg
	if (mouseX > 55 && mouseX < 105 && mouseY > 75 && mouseY < 125) {
		d = 1;
	}

	//click on waffle
	if (mouseX > 55 && mouseX < 105 && mouseY > 135 && mouseY < 135 + 50) {
		d = 2;
	}

	//click on acaibowl
	if (
		mouseX > 55 &&
		mouseX < 105 &&
		mouseY > 135 + 60 &&
		mouseY < 135 + 50 + 60
	) {
		d = 3;
	}

	//click on avocado
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60
	) {
		d = 4;
	}

	//click on platonggo
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60
	) {
		d = 5;
	}

	//click on hashbrown
	if (
		mouseX > 65 &&
		mouseX < 110 &&
		mouseY > 135 + 60 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60 + 60
	) {
		d = 6;
	}

	//click on bacon
	if (mouseX > 135 && mouseX < 135 + 50 && mouseY > 75 && mouseY < 75 + 50) {
		d = 7;
	}

	//click on matcha
	if (mouseX > 135 && mouseX < 135 + 50 && mouseY > 135 && mouseY < 135 + 50) {
		d = 8;
	}

	//click on mcmuffin
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 &&
		mouseY < 135 + 50 + 60
	) {
		d = 9;
	}

	//click on salapao
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60
	) {
		d = 10;
	}

	//click on sushi
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60
	) {
		d = 11;
	}

	//click on tomato
	if (
		mouseX > 135 &&
		mouseX < 185 &&
		mouseY > 135 + 60 + 60 + 60 + 60 &&
		mouseY < 135 + 50 + 60 + 60 + 60 + 60
	) {
		d = 12;
	}

	//click on plate1
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 85 &&
		mouseY < 135
	) {
		p = 1;
	}

	//click on plate2
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 180 - 25 &&
		mouseY < 180 + 25
	) {
		p = 2;
	}

	//click on plate3
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 250 - 25 &&
		mouseY < 250 + 25
	) {
		p = 3;
	}

	//click on plate4
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 320 - 25 &&
		mouseY < 320 + 25
	) {
		p = 4;
	}

	//click on plate5
	if (
		mouseX > width - 155 &&
		mouseX < width - 105 &&
		mouseY > 390 - 25 &&
		mouseY < 390 + 25
	) {
		p = 5;
	}
}

function mouseDragged() {
	if (d == 1 && mouseX > 255 && mouseX < width - 255) {
		image(friedegg, mouseX, mouseY, scale, scale);
	} else if (d == 2 && mouseX > 255 && mouseX < width - 255) {
		image(waffle, mouseX, mouseY, scale, scale);
	} else if (d == 3 && mouseX > 255 && mouseX < width - 255) {
		image(acaibowl, mouseX, mouseY, scale, scale);
	} else if (d == 4 && mouseX > 255 && mouseX < width - 255) {
		image(avocado, mouseX, mouseY, scale, scale);
	} else if (d == 5 && mouseX > 255 && mouseX < width - 255) {
		image(platonggo, mouseX, mouseY, scale, scale);
	} else if (d == 6 && mouseX > 255 && mouseX < width - 255) {
		image(hashbrown, mouseX, mouseY, scale, scale);
	} else if (d == 7 && mouseX > 255 && mouseX < width - 255) {
		image(bacon, mouseX, mouseY, scale, scale);
	} else if (d == 8 && mouseX > 255 && mouseX < width - 255) {
		image(matcha, mouseX, mouseY, scale, scale);
	} else if (d == 9 && mouseX > 255 && mouseX < width - 255) {
		image(mcmuffin, mouseX, mouseY, scale, scale);
	} else if (d == 10 && mouseX > 255 && mouseX < width - 255) {
		image(salapao, mouseX, mouseY, scale, scale);
	} else if (d == 11 && mouseX > 255 && mouseX < width - 255) {
		image(sushi, mouseX, mouseY, scale, scale);
	} else if (d == 12 && mouseX > 255 && mouseX < width - 255) {
		image(tomato, mouseX, mouseY, scale, scale);
	}
}

function changebackground() {
	background(colorPicker.color());
	image(plate1, width / 2, height / 2, height, height);
}

function newplate() {
	clear();
	//background(colorPicker.color());
	changeplate();
}

function changeplate() {
	if (p == 1) {
		image(plate1, width / 2, height / 2, height, height);
		noFill();
		strokeWeight(4);
		circle(width - 130, 110, 50, 50);
	} else if (p == 2) {
		image(plate2, width / 2, height / 2, height, height);
		noFill();
		strokeWeight(4);
		circle(width - 130, 180, 50, 50);
	} else if (p == 3) {
		image(plate3, width / 2, height / 2, height, height);
		noFill();
		strokeWeight(4);
		circle(width - 130, 250, 50, 50);
	} else if (p == 4) {
		image(plate4, width / 2, height / 2, height, height);
		noFill();
		strokeWeight(4);
		circle(width - 130, 320, 50, 50);
	} else if (p == 5) {
		noFill();
		strokeWeight(4);
		circle(width - 130, 390, 50, 50);
	}
}
