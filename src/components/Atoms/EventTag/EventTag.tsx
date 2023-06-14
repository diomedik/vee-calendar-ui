import React from 'react';
import { Tag, TagProps } from 'antd';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';

interface IProps {
    value: string;
    closable?: boolean;
    onClose?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    label: string | React.ReactNode;
}

export const EventTag = (props: IProps): JSX.Element => {
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            className={`tag ${props.value}`}
            onMouseDown={onPreventMouseDown}
            closable={props.closable}
            onClose={props.onClose}
            style={{ marginRight: 3 }}
        >
            {props.label}
        </Tag>
    )
}