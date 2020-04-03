import React from "react";
import LazyLoader from "../common/LazyLoader";

function LoadRoute(props) {
    return (
        <LazyLoader
            componentPath={props.routeComponentPath}
            componentParent={props.routeComponentParent}
            fallback="Loading"
            {...props}
        />
    );
}

export default LoadRoute;
