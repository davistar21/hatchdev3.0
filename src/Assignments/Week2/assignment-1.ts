/* 
Library Management System

Description:

A simple system to manage books and members of a library using OOP principles. */



class Book {
  constructor(
    public id: number,
    public title: string,
    public author: string,
    public isAvailable: boolean = true
  ) {}
}

class Member {
  constructor(public id: number, public name: string) {}
}
class Library {
  private books: Book[] = [];
  private members: Member[] = [];
  private borrowedBooks: Book[] = [];


  addBook(book: Book): void {
    this.books.push(book);
  }

  addMember(member: Member): void {
    this.members.push(member);
  }

  lendBook(bookId: number, memberId: number): void {
    const book = this.books.find(b => b.id === bookId);
    if (!book){
      console.log('Book not found.')
      throw new Error('Book not found.')
    }

    if (book.isAvailable) {
      book.isAvailable = false;
      this.borrowedBooks.push(book);
      console.log(`Book ID: ${book.id}, Book "${book.title}" lent to member ${memberId}`);
    } else {
      console.log(`Book not available.`);
    }
  }

  returnBook(bookId: number): void {
    const book = this.books.find(b => b.id === bookId);
    this.borrowedBooks.splice(this.borrowedBooks.findIndex(b => b.id === bookId), 1)
    if (book && !book.isAvailable) {
      book.isAvailable = true;
      console.log(`Book "${book.title}" returned.`);
    } else {
      console.log(`Book was not lent or does not exist.`);
    }
  }

  listBooks(): void {
    this.books.forEach(book =>
      console.log(`${book.id}. ${book.title} by ${book.author} - ${book.isAvailable ? "Available" : "Lent"}`)
    );
  }
  listBorrowedBooks(): void {
      this.borrowedBooks.forEach(book =>
      console.log(`ID: ${book.id}. ${book.title} by ${book.author} - Lent`)
    );
  }
}

const newBooks: Book[] = [
  new Book(1, "To Kill a Mockingbird", "Harper Lee"),
  new Book(2, "1984", "George Orwell"),
  new Book(3, "Pride and Prejudice", "Jane Austen"),
  new Book(4, "The Great Gatsby", "F. Scott Fitzgerald"),
  new Book(5, "Moby-Dick", "Herman Melville"),
  new Book(6, "The Catcher in the Rye", "J.D. Salinger"),
  new Book(7, "Brave New World", "Aldous Huxley"),
  new Book(8, "The Hobbit", "J.R.R. Tolkien"),
  new Book(9, "Crime and Punishment", "Fyodor Dostoevsky"),
  new Book(10, "The Lord of the Rings", "J.R.R. Tolkien")
];


const lib = new Library();
// lib.addBook(new Book(1, "1984", "George Orwell"));
// lib.addBook(new Book(2, "To Kill a Mockingbird", "Harper Lee"));
lib.addMember(new Member(1, "Alice"));
// lib.lendBook(1, 1);
// lib.listBooks();
// lib.listBorrowedBooks();
// lib.returnBook(1);
// lib.listBooks();
// lib.listBorrowedBooks();

newBooks.forEach(book => {
  lib.addBook(book)
})
lib.lendBook(1, 1)
lib.lendBook(2, 1)
lib.lendBook(3, 1)
lib.lendBook(4, 1)
lib.lendBook(4, 1)
lib.listBooks();
lib.listBorrowedBooks()

