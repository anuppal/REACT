import { Component } from "react";
import Customer from "../model/Customer";

type Props = {
    customer:Customer,
    delEvent:(id:number) => void
}
export default class CustomerRow extends Component<Props> {
    render() {
        let {id, firstName, lastName} = this.props.customer; // desctructing
        return <div>
            {firstName} {lastName}
            &nbsp;  <button type="button" 
                onClick={() => this.deleteRow(id)}>Delete</button>
        </div>
    }

    deleteRow(id:number): void  {
        console.log("CustomerRow", id);
        this.props.delEvent(id);
    }   
}