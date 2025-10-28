import Clock from "./Clock";

type level = "basic" | "advanced";

function Ex01({nivel} : {nivel: level}) {
    return (
        <div>
            <Clock></Clock>
        </div>
    )
}

export default Ex01;