const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const lineThick = 7
    const lineWidth = 4;
    const howManyBoxes = 5;
    const howThicker = 2.5;
    const gap = 40;
    const marginPerc = 0.2

    const bounds = Math.min(width, height);
    const margin = bounds * marginPerc / 2;
    const wall = ((bounds * (1-marginPerc)) - (gap * (howManyBoxes-1))) / howManyBoxes;

    context.fillStyle = 'powderblue'
    context.fillRect(0, 0, width, height);

    context.lineWidth = lineWidth;
    context.strokeStyle = 'white';

    for (let i = 0; i < 5; i++){
      const xPos = i * (wall+ gap) + margin;

      for (let j = 0; j < 5; j++){
        const yPos = j * (wall+ gap) + margin;
        
        context.beginPath();
        context.rect(xPos, yPos, wall, wall);
        context.stroke();

        context.lineWidth = Math.random() > 0.5 ? lineThick * howThicker : lineThick
      }
    }
  };
};

canvasSketch(sketch, settings);