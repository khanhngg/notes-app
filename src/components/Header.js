const Header = ({ toggleFolders, deleteNote, createNote}) => {
  return (
    <header>
      <div className="logo">
        <span>Notes App</span>
      </div>
      <div className="toolbar">
        <div className="button" onClick={() => toggleFolders()}>
          {/* Toggle Folder Panel */}
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.75 3.125H6.25C5.4212 3.125 4.62634 3.45424 4.04029 4.04029C3.45424 4.62634 3.125 5.4212 3.125 6.25V18.75C3.125 19.5788 3.45424 20.3737 4.04029 20.9597C4.62634 21.5458 5.4212 21.875 6.25 21.875H18.75C19.5788 21.875 20.3737 21.5458 20.9597 20.9597C21.5458 20.3737 21.875 19.5788 21.875 18.75V6.25C21.875 5.4212 21.5458 4.62634 20.9597 4.04029C20.3737 3.45424 19.5788 3.125 18.75 3.125ZM6.25 5.20833H18.75C19.0263 5.20833 19.2912 5.31808 19.4866 5.51343C19.6819 5.70878 19.7917 5.97373 19.7917 6.25V8.33333H5.20833V6.25C5.20833 5.97373 5.31808 5.70878 5.51343 5.51343C5.70878 5.31808 5.97373 5.20833 6.25 5.20833ZM5.20833 18.75V10.4167H11.4583V19.7917H6.25C5.97373 19.7917 5.70878 19.6819 5.51343 19.4866C5.31808 19.2912 5.20833 19.0263 5.20833 18.75ZM18.75 19.7917H13.5417V10.4167H19.7917V18.75C19.7917 19.0263 19.6819 19.2912 19.4866 19.4866C19.2912 19.6819 19.0263 19.7917 18.75 19.7917Z" fill="#231F20" />
          </svg>
        </div>
        <div className="button" onClick={() => deleteNote()}>
          {/* Delete Note */}
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.875 6.25001H16.6666V4.51043C16.6422 3.84357 16.3544 3.21361 15.8662 2.75865C15.378 2.30368 14.7294 2.06084 14.0625 2.08335H10.9375C10.2706 2.06084 9.62192 2.30368 9.13376 2.75865C8.6456 3.21361 8.35775 3.84357 8.33331 4.51043V6.25001H3.12498C2.84871 6.25001 2.58376 6.35976 2.38841 6.55511C2.19306 6.75046 2.08331 7.01541 2.08331 7.29168C2.08331 7.56795 2.19306 7.8329 2.38841 8.02825C2.58376 8.2236 2.84871 8.33334 3.12498 8.33334H4.16665V19.7917C4.16665 20.6205 4.49589 21.4153 5.08194 22.0014C5.66799 22.5874 6.46284 22.9167 7.29165 22.9167H17.7083C18.5371 22.9167 19.332 22.5874 19.918 22.0014C20.5041 21.4153 20.8333 20.6205 20.8333 19.7917V8.33334H21.875C22.1512 8.33334 22.4162 8.2236 22.6115 8.02825C22.8069 7.8329 22.9166 7.56795 22.9166 7.29168C22.9166 7.01541 22.8069 6.75046 22.6115 6.55511C22.4162 6.35976 22.1512 6.25001 21.875 6.25001ZM10.4166 4.51043C10.4166 4.34376 10.6354 4.16668 10.9375 4.16668H14.0625C14.3646 4.16668 14.5833 4.34376 14.5833 4.51043V6.25001H10.4166V4.51043ZM18.75 19.7917C18.75 20.0679 18.6402 20.3329 18.4449 20.5282C18.2495 20.7236 17.9846 20.8333 17.7083 20.8333H7.29165C7.01538 20.8333 6.75043 20.7236 6.55508 20.5282C6.35973 20.3329 6.24998 20.0679 6.24998 19.7917V8.33334H18.75V19.7917Z" fill="#231F20" />
            <path d="M9.37504 17.7083C9.65131 17.7083 9.91626 17.5986 10.1116 17.4032C10.307 17.2079 10.4167 16.9429 10.4167 16.6666V12.5C10.4167 12.2237 10.307 11.9588 10.1116 11.7634C9.91626 11.5681 9.65131 11.4583 9.37504 11.4583C9.09877 11.4583 8.83382 11.5681 8.63847 11.7634C8.44312 11.9588 8.33337 12.2237 8.33337 12.5V16.6666C8.33337 16.9429 8.44312 17.2079 8.63847 17.4032C8.83382 17.5986 9.09877 17.7083 9.37504 17.7083Z" fill="#231F20" />
            <path d="M15.625 17.7083C15.9012 17.7083 16.1662 17.5986 16.3615 17.4032C16.5569 17.2079 16.6666 16.9429 16.6666 16.6666V12.5C16.6666 12.2237 16.5569 11.9588 16.3615 11.7634C16.1662 11.5681 15.9012 11.4583 15.625 11.4583C15.3487 11.4583 15.0838 11.5681 14.8884 11.7634C14.6931 11.9588 14.5833 12.2237 14.5833 12.5V16.6666C14.5833 16.9429 14.6931 17.2079 14.8884 17.4032C15.0838 17.5986 15.3487 17.7083 15.625 17.7083Z" fill="#231F20" />
          </svg>
        </div>
        <div className="button" onClick={() => createNote()}>
          {/* New Note */}
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.2083 7.64581L17.3541 4.79164C16.9816 4.44174 16.4935 4.24097 15.9826 4.22753C15.4717 4.21408 14.9737 4.3889 14.5833 4.71872L5.20828 14.0937C4.87157 14.4333 4.66193 14.8783 4.61453 15.3541L4.16661 19.6979C4.15258 19.8505 4.17237 20.0042 4.22459 20.1483C4.27681 20.2923 4.36015 20.4231 4.46869 20.5312C4.56603 20.6278 4.68146 20.7041 4.80837 20.756C4.93529 20.8078 5.07119 20.8341 5.20828 20.8333H5.30203L9.64578 20.4375C10.1216 20.3901 10.5666 20.1804 10.9062 19.8437L20.2812 10.4687C20.6451 10.0843 20.8417 9.57134 20.828 9.0422C20.8144 8.51306 20.5915 8.01092 20.2083 7.64581ZM9.45828 18.3541L6.33328 18.6458L6.61453 15.5208L12.4999 9.70831L15.3124 12.5208L9.45828 18.3541ZM16.6666 11.125L13.8749 8.33331L15.9062 6.24997L18.7499 9.09372L16.6666 11.125Z" fill="#231F20" />
          </svg>
        </div>
      </div>
      <div className="search-bar">
        {/* Search bar */}
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.5729 20.0938L18.0313 16.5625C19.1739 15.1067 19.794 13.309 19.7917 11.4583C19.7917 9.81016 19.3029 8.199 18.3873 6.82859C17.4716 5.45818 16.1701 4.39007 14.6474 3.75934C13.1246 3.12861 11.4491 2.96358 9.83259 3.28513C8.21608 3.60667 6.73122 4.40034 5.56578 5.56578C4.40034 6.73122 3.60667 8.21608 3.28513 9.83259C2.96358 11.4491 3.12861 13.1246 3.75934 14.6474C4.39007 16.1701 5.45818 17.4716 6.82859 18.3873C8.199 19.3029 9.81016 19.7917 11.4583 19.7917C13.309 19.794 15.1067 19.1739 16.5625 18.0313L20.0938 21.5729C20.1906 21.6706 20.3058 21.7481 20.4327 21.8009C20.5597 21.8538 20.6958 21.881 20.8333 21.881C20.9709 21.881 21.107 21.8538 21.2339 21.8009C21.3609 21.7481 21.4761 21.6706 21.5729 21.5729C21.6706 21.4761 21.7481 21.3609 21.8009 21.2339C21.8538 21.107 21.881 20.9709 21.881 20.8333C21.881 20.6958 21.8538 20.5597 21.8009 20.4327C21.7481 20.3058 21.6706 20.1906 21.5729 20.0938ZM5.20834 11.4583C5.20834 10.2222 5.57489 9.01383 6.26165 7.98602C6.94841 6.95822 7.92453 6.15714 9.06657 5.68409C10.2086 5.21104 11.4653 5.08727 12.6777 5.32843C13.89 5.56959 15.0037 6.16484 15.8778 7.03892C16.7518 7.913 17.3471 9.02664 17.5882 10.239C17.8294 11.4514 17.7056 12.7081 17.2326 13.8501C16.7595 14.9921 15.9585 15.9683 14.9307 16.655C13.9028 17.3418 12.6945 17.7083 11.4583 17.7083C9.80073 17.7083 8.21102 17.0499 7.03892 15.8778C5.86682 14.7057 5.20834 13.1159 5.20834 11.4583Z" fill="#231F20" />
        </svg>
      </div>
    </header>
  );
};

export default Header;