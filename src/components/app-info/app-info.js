import './app-info.css'

const AppInfo = (props) => {
    const {employeesCount, increased} = props;
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании Evil Corp</h1>
            <h2>Общее число сотрудников: {employeesCount}</h2>
            <h2>Премию получат: {increased}</h2>
        </div>
    );
};

export default AppInfo;