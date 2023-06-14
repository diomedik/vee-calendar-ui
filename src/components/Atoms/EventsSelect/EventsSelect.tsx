import React from 'react';
import { Select, Tag } from 'antd';
import './EventsSelect.css';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';
import "./EventsSelect.css";
interface IProps {
    onChange(tags: string[]): void;
}

const options = [ {value: 'facebook'}, {value: 'instagram'} ];

export const EventsSelect = (props: IProps) => {
    const [selectedTag, setSelectedTag] = React.useState<string[]>([]);

    const handleChange = (value: string[], options): void => {
        if (options?.length === 0 || options?.length === 1) {
            setSelectedTag(value)
            props.onChange(value);
        }

    }
    const tagRender = (tagProps: CustomTagProps): React.ReactElement => {
        const { label, value, closable, onClose } = tagProps;

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

    console.log(selectedTag)

    return (
        <Select 
            mode="tags"
            className="events-select"
            value={selectedTag}
            options={options}
            tagRender={tagRender}
            onChange={handleChange}
        />
    )
}