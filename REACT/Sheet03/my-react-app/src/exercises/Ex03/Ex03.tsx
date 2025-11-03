import UserList from "./UserList";
import UserListAdvanced from "./UserListAdvanced";

type level = "basic" | "advanced";

function Ex03({nivel}: {nivel:level}) {
    return(
        <div>
            {nivel === "basic" ? (
                <>
                <UserList></UserList>
                </>
                ) : nivel === "advanced" ? (
                <>
                <UserListAdvanced></UserListAdvanced>
                </>
            ) : null}

        </div>
    )
}

export default Ex03