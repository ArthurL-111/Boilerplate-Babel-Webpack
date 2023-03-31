import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.sass";

class App extends React.Component {
    render() {
        return (
            <div>
                <p>Hello</p>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);