import React, { ReactNode } from 'react';
import { Select } from 'antd';
import { CustomTagProps } from 'rc-select/lib/BaseSelect';
import { EventTag } from '../EventTag/EventTag';
import './EventsSelect.css';
interface IProps {
    onChange(tags: string[]): void;
}

type Option = {
    label?: React.ReactNode;
    value?: string | number | null;
    children?: ReactNode[];
}

const options = [{ value: 'facebook' }, { value: 'instagram' }];

export const EventsSelect = (props: IProps) => {
    const { onChange } = props;
    const [selectedTag, setSelectedTag] = React.useState<string[]>([]);

    const handleChange = (value: string[], options: Option | Option[]): void => {
        if (Array.isArray(options) && (options?.length === 0 || options?.length === 1)) {
            setSelectedTag(value)
            onChange(value);
        }

    }
    const tagRender = (tagProps: CustomTagProps): React.ReactElement => (
        <EventTag {...tagProps} />
    )

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