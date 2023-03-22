import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import BookDescription from './BookDescription';

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "455"
                },
                {
                    title: "Rok 1984",
                    author: "G. Orwell",
                    pages: "455"
                },
                {
                    title: "Władca Pierścieni",
                    author: "J. R. Tolkien",
                    pages: "669"
                },
                {
                    title: "Stary człowiek i morze",
                    author: "E. Hemingway",
                    pages: "226"
                }

            ]
        }
    }
    updateBooks = () => {
        this.setState({
            books: [
                {
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "455"
                },
                {
                    title: "Władca Pierścieni",
                    author: "J. R. Tolkien",
                    pages: "669"
                }
            ]
        });
    };
    addNewBook = () => {
        this.setState(prevState =>({
                books: [
                    ...prevState.books,
                    {
                        title: "Nowy wspaniały świat",
                        author: "A. Huxley",
                        pages: "255"
                    }
                ]
            }
        ));
    };
    render(){
        return(
            <div>
                <Header/>
                <button onClick={this.updateBooks}>Pozostaw tylko książki Tolkiena</button>
                <button onClick={this.addNewBook}>Dodaj nową książkę</button>
                {
                    this.state.books.map((book, i) =>
                        <BookDescription key = {i} book={book}/>
                    )
                }
                <Footer/>
            </div>
        );
    }
}

export default Book;