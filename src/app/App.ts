import { ThreeCore } from './ThreeCore';
import { TFCore } from './TFCore';

export class App{

    threeCore: ThreeCore;
    tfCore: TFCore;

    static init(){
        new App();
    }

    constructor(){
        this.threeCore = new ThreeCore();
        this.tfCore = new TFCore();
    }

}