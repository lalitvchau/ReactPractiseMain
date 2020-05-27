import React from 'react';
import { UseStateHook } from './UseState';
import UseStateArray from './useStateArray';
import UseEffectEveryTimeUpdateHook from './UseEffectEveryTimeUpdateHook';
import ConditionEffectHook from './ConditionEffectHook';
import MouseContainner from './MouseContainner';
import IntervalCounter from './IntervalCounter';
import MultiHookDepedancy from './MultiHookDepedancy';
import DataFetch from './DataFetch';
import ComponentA from './ContexClasses/ComponentA';
import BasicJSReducer from './BasicJSReducer';
import Counter from './Reducer/Counter';
import CounterThree from './Reducer/CounterThree';
import Main from './Reducer/ContextWithReducer/Main';

export const Hook = () => {
	return (
		<div>
			{/* <Counter2 /> */}
			<Main/>
			<Counter />
			<CounterThree />
			<br />
			{/* <UseStateHook />
			<UseStateArray /> */}
			{/* <BasicJSReducer /> */}
			<ComponentA></ComponentA>
			<DataFetch />
			<MultiHookDepedancy />
			<IntervalCounter />
			<MouseContainner />
			<UseEffectEveryTimeUpdateHook />
			<ConditionEffectHook />
		</div>);
};

