import { Component } from "react";
import Customer from "../model/Customer";
import CustomerRow from "./CustomerRow";
import Filter from "./Filter";

type Props = {
}
type AppState = {
    complete:Customer[],
    customers:Customer[]
}
export default class CustomerList extends Component<Props, AppState> {
    state = {
        "complete": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ],
        "customers": [{
            "id": 1,
            "firstName": "Rachel",
            "lastName": "Green "
        },
        {
            "id": 2,
            "firstName": "Chandler",
            "lastName": "Bing"
        },
        {
            "id": 3,
            "firstName": "Joey",
            "lastName": "Tribbiani"
        },
        {
            "id": 4,
            "firstName": "Monica",
            "lastName": "Geller"
        },
        {
            "id": 5,
            "firstName": "Ross",
            "lastName": "Geller"
        },
        {
            "id": 6,
            "firstName": "Phoebe",
            "lastName": "Buffay"
        }
        ]
    };
 
    deleteCustomer(id:number): void {
        let custs = this.state.customers.filter(c => c.id !== id);
        // reconcillation ==> state changes re-render
        this.setState({
            customers: custs
        });
    }

    filterCustomer(txt:string) :void {
        let custs = this.state.complete.filter(c => c.lastName.toLowerCase().indexOf(txt.toLowerCase()) >= 0);
        this.setState({
            customers: custs
        });
    }

    render() {
        return <div>
            <Filter filterEvent={(txt) => this.filterCustomer(txt)}/>
            {
                this.state.customers.map(c => <CustomerRow 
                    delEvent={(id) => this.deleteCustomer(id)}
                    customer={c} 
                    key={c.id}/>)
            }
        </div>
    }
}