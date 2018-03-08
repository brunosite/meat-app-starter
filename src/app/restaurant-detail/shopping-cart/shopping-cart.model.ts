import { MenuItemModel } from "../menu-item/menu-item.model";

export class MenuItemCartModel{
    constructor(public item: MenuItemModel, public quantity: number = 1){}

    value(): number{
        return this.item.price * this.quantity;
    }
}