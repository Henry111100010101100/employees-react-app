import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Tinky-Winky', salary: 900, increase: false, rise: true, id:1},
                {name: 'Dipsy', salary: 2000, increase: false, rise: false, id:2},
                {name: 'Po', salary: 3400, increase: true, rise: false, id:3}
            ]
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState( ({data}) => {
            return {
                data: data.filter(item => item.id !==id)
            }
        })
    }

    addItem = (name, salary) => {
        const item = {
            name,
            salary,
            increase: false,
            rise: false,
            id: this.maxId++
        }
        
        this.setState( ({data}) => {
            const newArr = [...data, item];
            return {
                data: newArr
            }
        })
    }

    onToggleIncrease = (id) => {
/*         this.setState( ({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const old = data[index];
            const newObj = {...old, increase: !old.increase};
            const newArr = [...data.slice(0, index), newObj, ...data.slice(index + 1)]

            return {
                data: newArr
            }
        }) */

        this.setState( ({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    item = {...item, increase: !item.increase};
                }

                return item;
            })
        }))

        console.log(`Increase this ${id}`);
    }

    onToggleRise = (id) => {
        console.log(`Rise this ${id}`);
    }

    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={this.state.data}
                onDelete={this.deleteItem}
                onIncrease={this.onToggleIncrease}
                onRise={this.onToggleRise}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;