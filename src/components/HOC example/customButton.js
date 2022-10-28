const CustomButton = (props) => {
    return (
        <button onClick={() => {
            console.log('click-click');
            props.onClick?.()
        }}>ПОДРОБНЕЕ</button>
    )
}

export default CustomButton;