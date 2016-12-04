const React = require('react')


function MainPanel(props) {
    const {state, validation, actions} = props;
    return (
        <div id="main_panel" className="pure-form">
            <div id="title">
                <h1>Company</h1>
                <ValidationIcon type={validation.summary} />
            </div>
            <div className="item flex-box">
                <Label>Name</Label>
                <TextInput value={state.name} onChange={actions.changeName} />
                <ValidationIcon type={validation.name} />
            </div>
            <div className="item flex-box">
                <Label>ZipCode</Label>
                <TextInput value={state.zipCode} onChange={actions.changeZipCode} />
                <ValidationIcon type={validation.zipCode} />
            </div>
            <div className="item flex-box">
                <Label>Address</Label>
                <TextInput value={state.address} onChange={actions.changeAddress} />
                <ValidationIcon type={validation.address} />
            </div>
        </div>
    )
}

function ValidationIcon(props) {
    const {type} = props;
    switch(type) {
        case 'ERROR':
            return (<span className='validation-icon glyphicon glyphicon-remove'></span>)
        case 'OK':
            return (<span className='validation-icon glyphicon glyphicon-ok'></span>)
        default:
            throw new Error(`No such validation status: ${type}`)
    }
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
