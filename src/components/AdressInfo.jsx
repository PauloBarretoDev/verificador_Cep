export function AdressInfo(props) {
console.log("renderizou filho");
    return (
        <div>
            <p>Endereço: { props.address}</p>
            <p>Bairro: { props.district}</p>
            <p>Cidade: {props.city }</p>
            <p>Estado: {props.state }</p>
        </div>
    )
}