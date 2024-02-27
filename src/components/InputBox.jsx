import React from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo';

const InputBox = ({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency='usd',
    amountDisabled,
    className,
    placeholder
}) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        <div className='w-1/2'>
            <label>{label}</label>
            <input 
            type='number' 
            placeholder={placeholder}
            className='outline-none w-full bg-transparent py-1.5'
            disabled={amountDisabled}
            value={amount}
            onChange={(e)=>{onAmountChange && onAmountChange(e.target.value)}}
            >
            </input>
        </div>
        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>
                Currency Type
            </p>
        <select className='rounded-lg bg-gray-100 cursor-pointer outline-none' value={selectedCurrency} onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
            {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
            ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox
