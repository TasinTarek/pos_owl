/** @odoo-module */
import Registries from "point_of_sale.Registries"
import ProductScreen from "point_of_sale.ProductScreen"
const { onWillStart } = owl
const ProductScreenInherit = (payment_screen) => class extends payment_screen {
    setup(){
        super.setup()
        console.log("Inherited Product Screen")
        console.log("Product List", this.env.pos.db)
        this.favorite_products = []

        onWillStart(async ()=>{
            const data = await this.env.services.rpc({
                'model': 'product.product',
                'method': 'search',
                'kwargs': {
                    'domain': [['available_in_pos', '=', true],['product_tag_ids.name', '=', 'Favorite']]
                }
            })
            this.favorite_products = data
            console.log('RPC Product',data)
        })
    }
    // get favorite_products(){
    //     // let products = this.env.pos.db.get_product_by_category(2);
    //     console.log("Fav Product List")
    //     // return products
    // }
}

Registries.Component.extend(ProductScreen, ProductScreenInherit)