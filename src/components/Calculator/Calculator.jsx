import React, { useState } from 'react';

const Calculator = () => {
    const [value, setValue] = useState('')
    const handleInput = () => {
        setValue(value + '**');
    };


    return (
        <div className='w-[50%] mx-auto rounded-xl h-[530px] bg-black my-5'>
            <div className='w-[90%] mx-auto'>
                <form action="">
                    <input className='border rounded-xl text-right pe-4  bg-white text-black w-[87%] mb-5 ms-10  border-white outline-none shadow-none py-5 mt-30' type="text" value={value} readOnly />


                    <div className='text-white grid grid-cols-4'>
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="AC" onClick={() => setValue('')} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="DE" onClick={() => setValue(value.slice(0, -1))} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="." onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="/" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div className='text-white grid grid-cols-4'>
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="7" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="8" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="9" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="*" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div className='text-white grid grid-cols-4'>
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="4" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="5" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="6" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="+" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div className='text-white grid grid-cols-4'>
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="1" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="2" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="3" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="-" onClick={e => setValue(value + e.target.value)} />
                    </div>
                    <div className='text-white grid grid-cols-4'>
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="^" onClick={handleInput}
                        />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="0" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="log" onClick={e => setValue(value + e.target.value)} />
                        <input className=' bg-red-500 w-18 mx-auto py-2 mb-2 rounded cursor-pointer' type="button" value="=" onClick={() => {
                            try {
                                setValue(eval(value).toString()); // Evaluate the expression
                            } catch {
                                setValue('Error'); // Handle errors
                            }
                        }} />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default Calculator;