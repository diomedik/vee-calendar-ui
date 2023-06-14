import React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { datetime, RRule, RRuleSet, rrulestr } from 'rrule'
import { Calendar as CalendarUI, Row, Col, Select as SelectUI } from "antd";
import { useEvents } from '../../../hooks/useEvents';
import { SelectWithArrows } from '../../Atoms/SelectWithArrows';
import { EventModal } from '../../Moleculas/EventModal';
import './Calendar.css'
import { EventTag } from '../../Atoms/EventTag/EventTag';
import { useMutation, useQuery } from '@apollo/client';
import { GET_EVENTS } from '../../../graphql/event/event.query';
import { CREATE_EVENT } from '../../../graphql/event/event.mutate';

dayjs.extend(dayLocaleData);

type Tag = {
    type: string;
    startDate: string;
    id: string;
}
const date = new Date('2023-06-14').toISOString();
const end = new Date('2023-06-15').toISOString();
export const Calendar = () => {
    const tags = [{value: 'facebook'}];
    const [createEvent] = useMutation(CREATE_EVENT);
    const [showModal, setShowModal] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Dayjs>(dayjs);
    const currentYear = dayjs().clone().year();
    const {data, error, loading} = useQuery(GET_EVENTS, {variables: {endDate: end, startDate: date}});
    console.log(data)
    const handleCellClick = (date:  Dayjs, info?: any): void => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const handleSubmit = (tag: string) => {
        const rule = new RRule({
            freq: RRule.DAILY,
            wkst: RRule.MO,
            dtstart: selectedDate.toDate(),
            until: selectedDate.toDate()
        });

        createEvent({
            variables: { type: tag, rrule: rule.toString()}
        })
        setShowModal(false);
    }

    const fullCellRender = (date: Dayjs): JSX.Element => {
        return (
            <div className="cell">
                <div className="day">{date.date()}</div>
                <div>
                    {!loading && data?.events?.items.map((tag: Tag, index: number) => {
                        if(new Date(tag.startDate).toDateString() === new Date(date.toISOString()).toDateString()) {
                            return (
                                <EventTag key={index} value={tag.type} label={tag.type} />
                            )
                        }
                    })}
                </div>
            </div>
        )
    }

    const renderHeader = ({ value, onChange }: {value: Dayjs, onChange(date: Dayjs): void}): JSX.Element => {
        const current = value.clone();
        const localeData = value.localeData();
        const month = value.month();
        const startYear = currentYear - 10;
    
        const monthOptions = Array.from({length: 12}, (_, index) => ({
            label: localeData.months(current.month(index)),
            value: index,
        }));
          
        const yearOptions = Array.from({length: 20}, (_, index) => {
            const calcYear = startYear + index;
            
            return {
                label: calcYear,
                value: calcYear,
            }
        })
    

        return (
            <div>
                <Row className="table-header" justify="center">
                    <Col>
                        <SelectWithArrows
                            size="large" 
                            value={month}
                            onChange={(passedValue) => {
                                const now = value.clone().month(passedValue);
                                onChange(now)
                            }}
                            defaultValue={current.month()}
                            options={monthOptions}
                            showArrow={false}
                            bordered={false}
                            open={false}
                        />
                    </Col>
                    <Col>
                        <SelectWithArrows 
                            size="large"
                            value={value.clone().year()}
                            defaultValue={current.year()}
                            onChange={(passedValue) => {
                                const now = value.clone().year(passedValue);
                                onChange(now)
                            }}
                            options={yearOptions}
                            showArrow={false}
                            bordered={false}
                            open={false}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <>
            <CalendarUI 
                className="calendar"
                headerRender={renderHeader} 
                fullCellRender={fullCellRender}
                onSelect={(date, { source }) => {
                    if (source === 'date') {
                      handleCellClick(date)
                    }
                }}
            />
            <EventModal 
                open={showModal}
                date={selectedDate}
                onCancel={() => setShowModal(false)} 
                onSumbit={handleSubmit} 
            />
        </>
        
    )
}