import { ThreeCore } from './ThreeCore';
import { CanvasCore } from './CanvasCore';
import { TFCore } from './TFCore';

export class App{

    threeCore: ThreeCore;
    tfCore: TFCore;
    canvasCore: CanvasCore;

    static init(){
        new App();
    }

    constructor(needCanvas: boolean = false){

        // this.tfCore = new TFCore();

        if (needCanvas){
            this.canvasCore = new CanvasCore(this);
        } else {
            this.threeCore = new ThreeCore();
        }

    }

}