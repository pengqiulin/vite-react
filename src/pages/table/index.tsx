import React from 'react'
import { renderRoutes } from "react-router-config";

const Table:React.FC = (props: any) => {
    return renderRoutes(props.route.routes)
}

export default Table
