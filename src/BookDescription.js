import PropTypes from "prop-types";

const BookDescription = (props) =>{
    return(
        <div>
            <h1>{props.book.title}</h1>
            <h2>{props.book.author}</h2>
            <h4>Pages: {props.book.pages}</h4>
            <button onClick={() => props.deleteBook(props.book.id)}>Usuń książkę</button>
            <hr/>
        </div>
    );
}

BookDescription.propTypes = {
    book: PropTypes.object.isRequired,
    deleteBook: PropTypes.func
}

BookDescription.defaultProps = {
    book: {
        title: "Tytuł Książki",
        author: "Autor Książki",
        pages: "Liczba stron",
    }
}

export default BookDescription;