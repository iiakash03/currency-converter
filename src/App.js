import React, { useEffect, useState } from 'react';
import './App.css';
import InputBox from './components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const[to,setTo]=useState('usd')
  const[from,setFrom]=useState('inr')
  const[amount,setAmount]=useState(0)
  const [convertedAmount,setConvertedAmount]=useState(0)

  let currencyInfo=useCurrencyInfo(from);

  const[currency,setCurrency]=useState([])

  useEffect(() => {
    if (currencyInfo) {
      setCurrency(Object.keys(currencyInfo));
    }
  }, [currencyInfo]);

  function swap() {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }
  
  

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-n-repeat" style={{ backgroundImage: `url(${"https://images.pexels.com/photos/210574/pexels-photo-210574.jpeg"})`, backgroundSize: 'cover' }}>
      <div className='w-full'>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
          <form
            onSubmit={(e)=>{
              e.preventDefault();
              setConvertedAmount(amount*currencyInfo[to]);
            }}
          >
            <div className='w-full mb-1'>
            <InputBox
              label='from'
              amount={amount}
              onAmountChange={(amount)=>{
                setAmount(amount)
              }}
              onCurrencyChange={(currency)=>{
                setFrom(currency)
              }}
              currencyOptions={currency}
              selectedCurrency={from}
            />
            </div>
            <div className='relative w-full h-0.5'>
              <button onClick={swap} type="button"
              className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'>
                Swap
              </button>
            </div>

            <div className='w-full mb-1'>
            <InputBox
              label='to'
              amount={convertedAmount}
              onAmountChange={(amount)=>{
                setConvertedAmount(amount)
              }}
              onCurrencyChange={(currency)=>{
                setTo(currency)
              }}
              currencyOptions={currency}
              selectedCurrency={to}
              amountDisabled={true}
            />
            </div>

            <div className='w-full'>
              <button
                type='submit'
                className='w-full border border-gray-60 rounded-md bg-blue-600 text-white px-2 py-0.5'
              >
                Convert {from.toUpperCase()} to {to.toUpperCase()}
              </button>
            </div>

          </form>
        </div>
      </div> 
    </div>
  );
}

export default App;
