import * as React from "react";
import { useRecordContext } from 'react-admin';
const tempField = ({ source }) => {
    const record = useRecordContext();
    return record ? (
        <a href={record[source]}>
            {record[source]}
        </a>    
    ) : null;
}

export default tempField;