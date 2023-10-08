import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import RootComponent from './RootComponent';
import './App.css';

import { persistor, store } from './store/reducers/store'
import { FormWidget } from './components/form-widget'
import { ProgressBar } from './components/progress-bar'
import { StarRating } from './components/star-rating'
import StopWatch from './components/stop-watch'
import TimeClock from './components/time-clock'
import TodoList from './components/todo-list'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <div className="App">
                    <header>
                        <strong>Javascript components in action below</strong>
                    </header>
                    <TimeClock />
                    <StopWatch />
                    <TodoList />
                    <ProgressBar />
                    <FormWidget />
                    <StarRating />
                </div>            </PersistGate>
        </Provider>
    )
}

export default App
