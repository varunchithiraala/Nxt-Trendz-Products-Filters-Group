import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderSearchInput = () => {
    const {searchInput} = props

    return (
      <div className="search-input-container">
        <input
          type="search"
          className="search-input"
          value={searchInput}
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
          placeholder="Search"
        />
        <BsSearch className="search-icon" />
      </div>
    )
  }

  const renderCategoriesList = () => {
    const {categoryOptions} = props

    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? 'category-name active-category-name'
        : 'category-name'

      return (
        <li
          key={category.categoryId}
          className="category-list-item"
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <div>
      <h1 className="product-categories-heading">Category</h1>
      <ul className="product-categories-list">{renderCategoriesList()}</ul>
    </div>
  )

  const renderRatingsFiltersList = () => {
    const {ratingsList} = props
    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)
      const isActive = rating.ratingId === activeRatingId
      const ratingClassName = isActive ? 'and-up active-rating' : 'and-up'

      return (
        <li
          key={rating.ratingId}
          className="rating-list-item"
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            className="rating-image"
            alt={`rating ${rating.ratingId}`}
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const renderRatingsFilters = () => (
    <div>
      <h1 className="rating-filters-heading">Rating</h1>
      <ul className="rating-filters-list">{renderRatingsFiltersList()}</ul>
    </div>
  )

  const {clearFilters} = props

  return (
    <div className="filters-group-container">
      {renderSearchInput()}
      {renderProductCategories()}
      {renderRatingsFilters()}
      <button
        type="button"
        className="clear-filters-button"
        onClick={clearFilters}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
