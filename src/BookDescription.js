const BookDescription = (props) =>{
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.author}</h2>
            <h4>Pages: {props.pages}</h4>
            <button onClick={() => props.deleteBook(props.id)}>
                Usuń książkę
            </button>
            <hr/>
        </div>
    );
}

export default BookDescription;