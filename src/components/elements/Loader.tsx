import { FC } from 'react'

const Loader: FC = () => {
    return (
        <div className='loader'>
            <div className='lds_roller'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
