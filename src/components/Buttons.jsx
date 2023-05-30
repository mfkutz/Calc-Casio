import '../styles/buttons.css'

const Buttons = (props) => {
    return (
        <div
            className={`buttons ${props.children === 'DEL' || props.children === 'AC' ? 'ac-del' : ''}`}
            onClick={() => props.handleOnButton(props.children)}
        >
            {props.children}
        </div>
    )
}

export default Buttons