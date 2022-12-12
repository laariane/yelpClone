import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "", location: "", sortBy: "best_match" };
    this.sortByOptions = {
      "Best Match": "best_match",
      "Highest Rated": "rating",
      "Most Reviewed": "review_count",
    };
    this.renderSortByOptions = this.renderSortByOptions.bind(this);
    this.handleLocationChange= this.handleLocationChange.bind(this);
    this.handleTermChange=this.handleTermChange.bind(this);
    this.handleSearch=this.handleSearch.bind(this)
    
    
  }
  getSortByOption(sortByOption){
    if(this.state.sortBy === sortByOption) {
      return 'active'
    }else{
      return ''
    }

  }
  handleSortByChange(sortByOption){
    this.setState({
      sortBy : sortByOption
    })
  }
  handleTermChange(event){
    let newTerm = event.target.value
    this.setState({
      term : newTerm
    })


  }
  handleLocationChange(event){
    let newLocation = event.target.value
    this.setState({
      location: newLocation
    })

  }
  handleSearch(event){
    this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)
  event.preventDefault()
  }
  renderSortByOptions() {
    return Object.keys(this.sortByOptions).map((sortByOption) => {
      let sortByOptionValue = this.sortByOptions[sortByOption];
      return <li  key={sortByOptionValue} onClick={(event)=>{this.handleSortByChange(sortByOptionValue)} } className={this.getSortByOption(sortByOptionValue)}>{sortByOption}</li>;
    });
  }
  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>{this.renderSortByOptions()}</ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange}  />
          <input placeholder="Where?"  onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Let's Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
