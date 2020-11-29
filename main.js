// generate of GPU instance
gpu = new GPU({mode: "gpu"});
let img;

const kernel = gpu.createKernel(function(x) {
  return x;
}).setOutput([100]);

console.log(kernel(42));


function preload() {
  img = loadImage('./fruits2.jpg');

}

function setup() {
  createCanvas(1, 1);



//  image(img, 0, 0);
}

function draw(){

  const render = gpu.createKernel(function(rad) {
    this.color(rad, 255, 0, 1);
  })
    .setOutput([windowWidth, windowHeight])
    .setGraphical(true)
    .setConstants({ w: windowWidth, h: windowHeight });

  render(radians(frameCount % 360));
  console.log(radians(frameCount % 360))

  canvas = render.canvas;
  document.getElementsByTagName('body')[0].appendChild(canvas);


}
