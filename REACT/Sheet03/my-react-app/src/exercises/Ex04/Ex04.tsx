

type level = "basic" | "advanced";

function Ex03({nivel}: {nivel:level}) {
    return(
        <div>
            {nivel === "basic" ? (
                <>
                </>
                ) : nivel === "advanced" ? (
                <>
                </>
            ) : null}   
        </div>
    )
}

export default Ex03