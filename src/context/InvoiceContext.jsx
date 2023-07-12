import React,{Component, createContext} from "react";

export const InvoiceContext = createContext();

class InvoiceContextProvider extends Component{
    
        state = {
          invoice : {services:[]}
        };

        updateInvoice = (n) =>{
            this.setState({invoice:n})
        }
    render() {
        return(
            <InvoiceContext.Provider value={{...this.state,updateInvoice:this.updateInvoice 
                    }}>

                {this.props.children}
            </InvoiceContext.Provider>
        );
    }
}

export default InvoiceContextProvider;