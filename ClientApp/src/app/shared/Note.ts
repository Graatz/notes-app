import { Tag } from "./Tag";

export class Note {
    id: number;
    name: string;
    content: string;
    tags: Tag[];

    constructor() {
        this.tags = new Array();
    }
}