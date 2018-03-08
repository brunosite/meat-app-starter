import { MenuItemCartModel } from "./shopping-cart.model";
import { MenuItemModel } from "../menu-item/menu-item.model";

export class ShoppingCartService{
    items: MenuItemCartModel[] = []

    clean(): void{
        this.items = []
    }

    addItem(item: MenuItemModel): void{
        let isFindItem = this.items.find(itemCart => itemCart.item.id === item.id)
        if(isFindItem){
            isFindItem.quantity++
        }else{
            this.items.push(new MenuItemCartModel(item))
        }
    }

    removeItem(item: MenuItemCartModel): void{
        this.items.splice(this.items.indexOf(item), 1)
    }

    total(): number{
        return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0)
    }
}