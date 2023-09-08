
export default function Friend1({kamal}){
    const {name, email} = kamal;

    return (
        <div className="card">
            <h4> Name:{name} </h4>
            <p>Email:{email} </p>
        </div>
    )
}