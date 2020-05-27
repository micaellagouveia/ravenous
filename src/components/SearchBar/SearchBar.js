import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
 // é um stateful component pois possui a proprieadade state
    constructor(props) {
        super(props)
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        }
// elementos que aparecem como filtro da pesquisa
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }

    }

    // se a opção escolhida for a opção que está no state, retorna ativado.
    getSortByClass(sortByOption) {
        if (sortByOption === this.state.sortBy) return 'active'
        return ''
    }

    // função que modifica o estado do filtro
    handleSortByChange(sortByOption) {
        this.setState({ sortBy: sortByOption })
    }
 // lida com a mudança do estado do filtro com o click -> entende melhor
    renderSortByOptions() {
        Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];

            return <li key={sortByOptionValue} onClick={this.handleSortByChange.bind(this, sortByOptionValue)} className={this.getSortByClass(sortByOptionValue)}> {sortByOption} </li>;
        })
    }

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses" />
                    <input placeholder="Where?" />
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        )
    }
}

export default SearchBar