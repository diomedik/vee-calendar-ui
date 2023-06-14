import React from 'react';
import type { Dayjs } from 'dayjs';
import { Modal, Select } from "antd"
import { EventsSelect } from "../../Atoms/EventsSelect";

interface IProps {
    open: boolean;
    date: Dayjs;
    onCancel(): void;
    onSumbit(tag: string): void;
}

export const EventModal = (props: IProps) => {
    const [tags, setTags] = React.useState<string[]>([]);

    const handleChangeTags = (tags: string[]) => {
        setTags(tags)
    }

    const handleSumbit = () => {
        props.onSumbit(tags[0].toUpperCase());
    }

    return (
        <Modal
            title="Event modal"
            open={props.open}
            onCancel={props.onCancel}
            onOk={handleSumbit}
        >
            {`${props.date}`}
            <EventsSelect onChange={handleChangeTags} />
        </Modal>
    )
}