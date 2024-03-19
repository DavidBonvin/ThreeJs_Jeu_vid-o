import scene from "./basic/Scene.js";
import camera from "./basic/Camara.js";
import renderer from "./basic/Renderer.js";
import cube from "./basic/shapes/Cube.js";
import light from "./basic/Light.js";
import plane from "./basic/shapes/Plane.js";
import loopMachine from "./basic/LoopMachine.js";
import keyListener from "./basic/KeyListener.js";
import keyCode from "./basic/KeyCode.js";
import characterController from "./controllers/CharacterController.js";
import keyController from "./controllers/KeyController.js";
import moveController from "./controllers/MoveController.js";

scene.add(cube);
scene.add(light);
scene.add(plane);

camera.position.set(2, 2, -2);


characterController.addCharacter(cube);
characterController.addController(keyController);
characterController.addController(moveController);

loopMachine.addCallback(() => {
    camera.lookAt(cube.position);
    if (keyListener.isPressed(keyCode.ENTER))cube.rotation.y += 0.01;
    renderer.render(scene, camera); // take a picture of the scene
}, 1000 / 60);

// resizeBy.start(renderer);
loopMachine.start();
keyListener.start();
characterController.start();






//console.log(scene, camera, renderer, cube); 
