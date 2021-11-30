import React, { useRef, useEffect, useState } from "react";
import { Redirect } from "react-router";
export default function PaypalAPI(props) {
    const paypal = useRef()
    const [isApprove, setAprove] = useState(false);
    const reDirecttoShop = () => {
        if(isApprove){
            return <Redirect to="/shop" />;
        }

    }

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                  intent: "CAPTURE",
                  purchase_units: [
                    {
                      description: "Cool looking table",
                      amount: {
                        currency_code: "CAD",
                        value: props.value,
                      },
                    },
                  ],
                });
              },
              onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
                
                setAprove(true);
                
              },
              onError: (err) => {
                console.log(err);
              },

        }).render(paypal.current)

    }, []);
    return (
        <div>
            <div ref={paypal} ></div>
            <div className="redirectAfterPayment">{reDirecttoShop()}</div>
        </div>
    )

    
}