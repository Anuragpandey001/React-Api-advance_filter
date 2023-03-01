

function Tick(props) {
    return (
        <>
            <h2>Hello world</h2>
            {/* <h3>it is {props.date.toLocalTimeString()}</h3> */}
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </>
    )
}

setInterval(Tick, 1000)
// export default Tick;

export const Form = () => {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}
export default Tick;