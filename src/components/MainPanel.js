const React = require('react')
const {validationStatus} = require('../constants')
const {isOK, isERROR} = validationStatus


function MainPanel(props) {
    const {state, validation, actions} = props;
    return (
        <div id="main_panel" className="pure-form">
            <div id="title">
                <h1>Company</h1>
                <ValidationIcon status={validation.summary} />
            </div>
            <div className="item flex-box">
                <Label>Name</Label>
                <TextInput value={state.name} onChange={actions.changeName} />
                <ValidationIcon status={validation.name} />
            </div>
            <div className="item flex-box">
                <Label>ZipCode</Label>
                <TextInput value={state.zipCode} onChange={actions.changeZipCode} />
                <ValidationIcon status={validation.zipCode} />
            </div>
            <div className="item flex-box">
                <Label>Address</Label>
                <TextInput value={state.address} onChange={actions.changeAddress} />
                <ValidationIcon status={validation.address} />
            </div>
        </div>
    )
}

function ValidationIcon(props) {
    const {status} = props;
    if(isERROR(status)) {
        return (
            <div className="validation-icon">
                <span className='glyphicon glyphicon-remove'></span>
                {status.hasMessage
                    ? <ToolTip message={status.message} />
                    : ''}
            </div>
        )
    }
    if(isOK(status)) {
        return (
            <div className="validation-icon">
               <span className='validation-icon glyphicon glyphicon-ok'></span>
            </div>
        )
    }
    throw new Error(`No such validation status: ${status.type}`)
}

function ToolTip(props) {
    const {message} = props;
    return (
        <div>
            <div className='message-tooltip-triangle'></div>
            <div className='message-tooltip'>{message}</div>
        </div>
    )
}


function Label(props) {
    const {children} = props
    return (<label className="fixed">{children}</label>)
}

function TextInput(props) {
    const {value, onChange} = props;
    return (
        <input
            type='text'
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="text-input"
        />
    )
}


module.exports = MainPanel
