import React from 'react';
import { Tag } from 'antd';
import { EventTypes } from '../../../enum/EventTypes';
import { ReactComponent as FacebookIcon } from './icons/facebook.svg'
import { ReactComponent as InstagramIcon } from './icons/instagram.svg'
import './EventTag.css';

interface IProps {
    value: string;
    closable?: boolean;
    onClose?: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    label: string | React.ReactNode;
    onlyIcon?: boolean;
}

const renderIcon = (value: string): JSX.Element | null => {
    if (value === EventTypes.INSTAGRAM) {
        return <InstagramIcon />
    }

    if (value === EventTypes.FACEBOOK) {
        return <FacebookIcon />
    }

    return null;
}

export const EventTag = (props: IProps): JSX.Element => {
    const { onlyIcon, value, closable, label, onClose } = props;
    const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Tag
            className={`tag ${value.toLowerCase()} ${onlyIcon && 'only-icon'}`}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{ marginRight: 3 }}
        >
            {renderIcon(value)}
            {!onlyIcon && <span>{label}</span>}
        </Tag>
    )
}