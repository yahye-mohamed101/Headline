import React, { useState } from 'react';
// Import React and the useState hook to manage state in this component.

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
};
// Define a TypeScript interface for the component's props.
// - `onSearch` is a required function prop that takes a string (the search query).
// - `placeholder` is an optional prop (denoted by `?`) for the input placeholder text.

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, placeholder = "Search News..." }) => {
// Define a functional React component called `SearchBar`.
// It uses the `SearchBarProps` interface to type its props.
// `placeholder` has a default value of "Search News..." if not provided.

    const [query, setQuery] = useState<string>('');
    // Declare a state variable `query` to store the user's input in the search bar.
    // `setQuery` is a function to update the value of `query`.
    // It's initialized with an empty string (`''`).

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };
    // Define a function `handleInputChange` that runs whenever the user types in the input field.
    // It updates the `query` state with the current value of the input field (`event.target.value`).

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Prevent the form from reloading the page when submitted.
        onSearch(query);
        // Call the `onSearch` function (passed in as a prop) with the current query.
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center' }}>
        {/* Create a form element. When the form is submitted, `handleSubmit` is called.
            Add inline styles to display the input and button side-by-side (flexbox). */}
            <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder={placeholder}
            />
            {/* Create a text input field:
                - `type="text"` specifies it's a text input.
                - `value={query}` binds the input's value to the `query` state.
                - `onChange={handleInputChange}` updates the `query` state whenever the input changes.
                - `placeholder={placeholder}` shows placeholder text, which defaults to "Search News..." */}
            
            <button type="submit">Search</button>
            {/* Add a button to submit the form. It triggers `handleSubmit` when clicked. */}
        </form>
    );
};

export default SearchBar;
// Export the `SearchBar` component so it can be imported and used in other parts of the app.
