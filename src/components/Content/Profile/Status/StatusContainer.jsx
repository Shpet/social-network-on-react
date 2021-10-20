import React from "react";
import mod from './Status.module.css';

class StatusContainer extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    render() {

        return (
            <div className={mod.status}>
                {!this.state.editMode
                    ? <p className={mod.status__text}
                        onDoubleClick={this.activateEditMode}
                    >{this.props.status}</p>
                    : <input className={mod.status__inp} type="text" value={this.state.status} autoFocus
                        onBlur={this.deactivateEditMode} onChange={this.onStatusChange} />
                }
            </div>
        )
    }
}



export default StatusContainer