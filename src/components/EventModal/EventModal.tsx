import React from 'react';
import type { Dayjs } from 'dayjs';
import { Modal, Select } from "antd"
import { EventsSelect } from "../EventsSelect";

interface IProps {
    open: boolean;
    date: Dayjs;
    onCancel(): void;
    onSumbit(): void;
}

export const EventModal = (props: IProps) => {
    const [tags, setTags] = React.useState<string[]>([]);

    const handleChangeTags = (tags: string[]) => {
        setTags(tags)
    }

    const handleSumbit = () => {

    }

    console.log(tags)
    return (
        <Modal
            title="Event modal"
            open={props.open}
            onCancel={props.onCancel}
            onOk={props.onSumbit}
        >
            {`${props.date}`}
            <EventsSelect onChange={handleChangeTags} />
        </Modal>
    )
}