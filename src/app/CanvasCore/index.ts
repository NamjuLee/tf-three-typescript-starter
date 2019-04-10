import { Project } from './Project';

import { App } from '../App';

export class CanvasCore {
    app: App;
    project: Project;
    ctx: CanvasRenderingContext2D;
    canvas: HTMLCanvasElement;

    host: HTMLElement;

    constructor(app: App) {
        this.app = app;
        this.project = new Project();

        const host = document.createElement('div');
        document.body.append(this.host);

        host.style.width = '500px';
        host.style.height = '500px';

        if (host) {this.host = host; }

        this.canvas = document.createElement('canvas');
        if (this.host) {
            this.host.appendChild(this.canvas);
            this.canvas.width = this.host.clientWidth;
            this.canvas.height = this.host.clientHeight;
        }
        const ctx = this.canvas.getContext('2d');
        if (ctx !== null) { this.ctx = ctx; }
        this.Loop();
    }
    Loop() {
        requestAnimationFrame(() => { this.Loop(); });
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        if (this.project) {this.project.Render(this.ctx);}
    }
}
