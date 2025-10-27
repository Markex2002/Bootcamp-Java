import Saludo from "../Ex01/saludo";

function Composicion() {
  return (
    <div>
      <Saludo nombre="Ana" />
      <Saludo nombre="Luis" />
      <Saludo nombre="María" />
    </div>
  );
}

export default Composicion;