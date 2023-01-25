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
            ],
            term: ''
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

    onToggleProp = (id, prop) => {
        this.setState( ({data}) => ({
            data: data.map(item => {
                if (item.id === id) {
                    item = {...item, [prop]: !item[prop]};
                }

                return item;
            })
        }))
    }

    onSearch = (arr, term) => {
        
        if (term.length === 0) {
            return arr;
        }

        return arr.filter(item => {
            return item.name.indexOf(term) > -1
        })

    }

    onUpdSearch = (term) => {
        this.setState({term: term})
    }

    render() {
        const {data, term} = this.state;
        const employeesCount = this.state.data.length;
        const getIncreased = this.state.data.filter(item => item.increase).length;
        const searchedData = this.onSearch(data, term);

        return (
            <div className="app">
                <AppInfo
                employeesCount={employeesCount}
                increased={getIncreased}/>
    
                <div className="search-panel">
                    <SearchPanel
                    onUpdSearch={this.onUpdSearch}/>
                    <AppFilter/>
                </div>
    
                <EmployeesList 
                data={searchedData}
                onDelete={this.deleteItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm
                onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;