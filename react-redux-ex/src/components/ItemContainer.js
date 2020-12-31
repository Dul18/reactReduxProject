import React from 'react'
import {connect} from 'react-redux'

import {buyCake,buyIceCream} from '../redux'

//either no of cakes or no of icecreams according to the props passed by parent component

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Item</button>
        </div>
    )
}

const mapStateToProps = (state,ownProps) =>{

    const itemState = ownProps.cake ? 
    state.cake.numOfCakes : 
    state.iceCream.numOfIceCreams

    return {
        item:itemState
    }

}

const mapDispatchToProps = (dispatch,ownProps) =>{

    const dispatchFunction = ownProps.cake
    ?()=> dispatch(buyCake())
    :()=> dispatch(buyIceCream())

    return {
        buyItem:dispatchFunction
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(ItemContainer)
