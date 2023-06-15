import React from 'react';
import type { Dayjs } from 'dayjs';
import { Modal } from 'antd';
import { EventsSelect } from '../../Atoms/EventsSelect';
import './EventModal.css';

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
            <div className="current-day">{`${props.date.format('YYYY-MM-DD')}`}</div>
            <EventsSelect onChange={handleChangeTags} />
        </Modal>
    )
}