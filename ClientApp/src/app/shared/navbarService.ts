export class NavbarService {
    visible: boolean;

    constructor() {
        this.visible = true;
    }

    show() {
        this.visible = true;
    }

    hide() {
        this.visible = false;
    }
}