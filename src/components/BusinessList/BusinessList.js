import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business';


// No método render ele recebe o objeto businesses do App.js e mapeia o array, retornando para cara elemento do array
// um componente Business que possui um atributo business que rebece o business
class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {this.props.businesses.map((business)=>{
                    return <Business business={business}/>
                })}
            </div>
        )
    }
}

export default BusinessList