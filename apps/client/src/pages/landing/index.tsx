import useHello from "../../hooks/useHello";

export default function Index() {


    const { hello, loading } = useHello();

    return (
        <div>
            <p>Pagina inicial para que se utilice como ejemplo! :D</p>
            <p>Saludo recibido de parte del servidor, mediante la API: {hello}</p>
            <p>Estado: {loading ? 'Cargando': 'Ya cargue'}</p>
        </div>
    );
}