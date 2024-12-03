const Person = (props) => {
return (
    <div>
        <h1>{props.p}</h1>
        <p>{props.age}</p>
        <p>{props.hobbies.join(', ')}</p>
    </div>
)
}

export default Person