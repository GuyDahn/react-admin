import React from 'react';
import { List, Datagrid, TextField, } from 'react-admin';

export const StoreList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="url" />
            <TextField source="thumbnailUrl" />
        </Datagrid>
    </List>
);