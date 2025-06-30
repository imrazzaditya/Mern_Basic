const SearchBox = () => {
    let searchText = "Aditya";
    const handleSearch = (e) => {
        searchText=e.target.value;
        console.log(searchText);
    };

    return (
        <div>
            <input type="text" onKeyUp={handleSearch} />
            <h3>{searchText}</h3> 
        </div>
    );
};

export {SearchBox};