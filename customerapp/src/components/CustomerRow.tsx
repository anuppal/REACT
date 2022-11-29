import { Component } from "react";
import Customer from "../model/Customer";

type Props = {
    customer:Customer
}
export default class CustomerRow extends Component<Props> {

    render() {
        return <div>
            {this.props.customer.firstName} {this.props.customer.lastName}
            &nbsp;<button type="button">Delete</button>
        </div>
    }
}