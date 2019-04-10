
export class Project{

    constructor(){

    }
    Render(ctx: CanvasRenderingContext2D){

        console.log('rr');

        ctx.beginPath();
        ctx.arc(100, 100, 0, 0, Math.PI);
        ctx.closePath();
        
    }


}