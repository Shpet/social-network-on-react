import { connect } from 'react-redux';
import Companion from './Companion/Companion';
import Companions from './Companions';


let mapStateToPropsm = (state)=>{

    let companions = state.messagePage.companionsData.map(c => <Companion id={c.id} imgUrl={c.imgUrl} imgAlt={c.imgAlt} name={c.name} />)
    return {
        companions: companions
    }
}
let mapDispatchToProps = ()=>{

    return {

    }
}


const CompanionsContainer = connect(mapStateToPropsm, mapDispatchToProps)(Companions)

export default CompanionsContainer;