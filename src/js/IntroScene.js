import { Scene, Actor, Vector } from 'excalibur';
import { Resources } from './resources.js';
import { StartButton } from './button.js';

class IntroScene extends Scene {
  onInitialize(engine) {
    // Create the background actor
    const introBackground = new Actor({
      pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
      width: engine.drawWidth,
      height: engine.drawHeight,
    });

    introBackground.graphics.use(Resources.IntroBackground.toSprite());
    this.add(introBackground);

    // Add any additional elements like a title or start button here
    const startButton = new StartButton();
    this.add(startButton);

    // Handle button click event to start the game
    startButton.on('startgame', () => {
      engine.goToScene('main');
    });
  }

  onActivate(context) {
    // This method is called when the scene becomes active
    console.log('Intro scene activated');
  }

  onDeactivate(context) {
    // This method is called when the scene is deactivated
    console.log('Intro scene deactivated');
  }
}

export { IntroScene };


   

   