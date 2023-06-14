import React from 'react';
import { Select, Tag } from 'antd';
import './EventsSelect.css';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';
import "./EventsSelect.css";
import { EventTag } from '../EventTag/EventTag';
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
    const tagRender = (tagProps: CustomTagProps): React.ReactElement => (
        <EventTag {...tagProps} />
    )

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