import React from 'react';
import { Select, Tag } from 'antd';
import './EventsSelect.css';

const options = [ {value: 'facebook'}, {value: 'instagram'} ];

interface IProps {
    onChange(tags: string[]): void;
}

interface ITagProps {
    label: string;
    value: string;
    closable: boolean;
    onClose(event: any): void;
    disabled: boolean;
}

export const EventsSelect = (props: IProps) => {
    const tagRender = (tagProps: ITagProps): React.ReactElement => {
        const { label, value, disabled, closable, onClose } = tagProps;

        const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
            event.preventDefault();
            event.stopPropagation();
        };

        return (
            <Tag
                className={`tag ${value}`}
                onMouseDown={onPreventMouseDown}
                closable={closable}
                onClose={onClose}
                style={{ marginRight: 3 }}
            >
                {label}
            </Tag>
        );
    }

    return (
        <Select 
            mode="multiple"
            options={options}
            tagRender={tagRender}
            onChange={props.onChange}
        />
    )
}