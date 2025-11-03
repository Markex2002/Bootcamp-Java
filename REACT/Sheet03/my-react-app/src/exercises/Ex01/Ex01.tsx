import Clock from "./Clock";
import Timer from "./Timer";

type level = "basic" | "advanced";

function Ex01({ nivel }: { nivel: level }) {
  return (
    <div className="ex01">
      <h1>
        Ejercicio 01 - Nivel <em>{nivel}</em>
      </h1>
      <div className={`ex01-content ex01-content--${nivel}`}>
        {nivel === "basic" ? <Clock /> : <Timer />}
      </div>
    </div>
  );
}

export default Ex01;
