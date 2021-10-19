import React from "react";
import Status from "./Status";

class StatusContainer extends React.Component {
    state = {
        editMode: true,
        status: 'mapPropsToState'
    }

    toggleEditMode() {
        this.setState({
            editMode: !this.state.editMode,
        })
    }
    render() {

        return <Status editMode={this.state.editMode} status={this.state.status} toggleEditMode={this.toggleEditMode.bind(this)} />
    }
}



export default StatusContainer