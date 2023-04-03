import React, {Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import BookDescription from './BookDescription';
import { func } from 'prop-types';

class Book extends Component{
    constructor(props){
        super(props);
        this.state = {
            books: [
                {
                    id: 1,
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "455"
                },
                {
                    id: 2,
                    title: "Rok 1984",
                    author: "G. Orwell",
                    pages: "455"
                },
                {
                    id: 3,
                    title: "Władca Pierścieni",
                    author: "J. R. Tolkien",
                    pages: "669"
                },
                {
                    id: 4,
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
                    id: 1,
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "455"
                },
                {
                    id: 3,
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
                        id: prevState.books.length + 1,
                        title: "Nowy wspaniały świat",
                        author: "A. Huxley",
                        pages: "255"
                    }
                ]
            }
        ));
    };
    deleteSingleBook = id => {
        console.log(id);
        this.setState({
            books: this.state.books.filter(function(book){
                return book.id !== id;
            })
        });
    };
    render(){
        return(
            <div>
                <Header/>
                <button onClick={this.updateBooks}>Pozostaw tylko książki Tolkiena</button>
                <button onClick={this.addNewBook}>Dodaj nową książkę</button>
                {
                    this.state.books.map((book, i) =>
                        <BookDescription key = {i} book={book} deleteBook={this.deleteSingleBook}/>
                    )
                }
                <Footer/>
            </div>
        );
    }
}

export default Book;