import React, {useEffect} from 'react';
import './App.css';
import {Counter} from "./components/counter/Counter";
import {Settings} from "./components/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {RootStoreType} from "./store/store";
import {CounterStateType} from "./store/reducers/countReducer";
import {incrementCountAC, resetCountAC} from "./store/actions/counterActionsCreator";


function App() {

    const {
        minMax,
        count,
        countError,
        settingsError
    } = useSelector<RootStoreType, CounterStateType>(state => state.counter)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetCountAC())
    }, [dispatch, minMax])

    const incrementCount = () => {
        if (count < minMax[1]) {
            dispatch(incrementCountAC())
        }
    }
    const resetCount = () => {
        dispatch(resetCountAC())
    }

    return (
        <div className = "App">
            <Settings minMax = {minMax} countError = {countError}/>
            <Counter count = {count} minMax = {minMax} incrementCount = {incrementCount} resetCount = {resetCount}
                     countError = {countError} settingsError = {settingsError}/>
        </div>
    );
}

export default App;



