import '../styles/smallButtons.css'

const SmallButtons = (props) => {


    return (
        <div
            className={`small-buttons ${props.children === 'Rad' ? 'green' : ''}`}
            onClick={() => props.handleOnButton(props.children)}
        >
            {props.children}
        </div>
    )
}

export default SmallButtons