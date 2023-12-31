import React from 'react';
import { Select, SelectProps } from 'antd';
import './SelectWithArrows.css'

type Option = {
    value: number;
    label: string | number | any;
}
interface IProps {
    onChange(date: number): void;
    options: Option[];
}

export const SelectWithArrows = (props: IProps & SelectProps): JSX.Element => {
    const { options, onChange } = props;
    const [index, setIndex] = React.useState<number>(() => options?.findIndex((option) => option.value === props.defaultValue) || 0);

    React.useEffect(() => {
        onChange(props.options[index].value);
    }, [index]);

    const handleUpArrow = () => {
        if (index < options.length - 1) {
            setIndex((prevState) => prevState + 1)
        } else {
            setIndex(0)
        }
    };

    const handleDownArrow = () => {
        if (index !== 0) {
            setIndex((prevState) => prevState - 1)
        } else {
            setIndex(options.length - 1)
        }
    };

    return (
        <div>
            <Select
                className="select-with-arrows"
                {...props}
            />
            <button className='arrow' onClick={handleUpArrow} />
            <button className='arrow arrow-down' onClick={handleDownArrow} />
        </div>

    )
}