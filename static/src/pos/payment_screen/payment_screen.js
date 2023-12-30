/** @odoo-module */
import Registries from "point_of_sale.Registries"
import PaymentScreen from "point_of_sale.PaymentScreen"

const PaymentScreenInherit = (payment_screen) => class extends payment_screen {
    setup(){
        super.setup()
        console.log("Inherited Payment Screen")
    }
    addNewPaymentLine({ detail: paymentMethod }) {
        const payment_line = super.addNewPaymentLine({ detail: paymentMethod })
        console.log("Inherited Add New Payment Line")
        return payment_line
    }
    go_next(){
        console.log('Clicked Next Button from Payment Screen')
    }
}

Registries.Component.extend(PaymentScreen, PaymentScreenInherit)